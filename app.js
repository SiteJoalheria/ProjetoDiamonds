const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const admin = require('./routes/admin.js');
const exphbs = require('express-handlebars');
const Produto = require('./models/Produto');
const Handlebars = require('handlebars');
const Cliente = require('./models/Cliente.js')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authenticate = require('./lib/authMiddleware.js');

app.use(cookieParser());

//Config template
        var handle = exphbs.create({
            defaultLayout: 'main'
            });
    //handlebars
    Handlebars.registerHelper('formatNumber', function(value) {
        return value.toString().replace('.', ',');
    });
    Handlebars.registerHelper('divide', function(value, divisor) {
        return value / divisor;
    });
    const hbs = exphbs.create({
        helpers: {
        isEqual: function (value1, value2, options) {
            if (value1 && value2 && value1.toString() === value2.toString()) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        }
        }
    });
        app.engine('handlebars', hbs.engine);
        app.set('view engine', 'handlebars');
        

    //Body Parser
        app.use(express.urlencoded({ extended: true }));
        app.use(bodyParser.json())

    //Rotas
        app.use('/admin', admin)

        app.get('/', function(req, res, next) {
            Produto.findAll()
            .then(function(produtos) {
                const categorias = {};

                for (const produto of produtos) {
                    const { categoria, nome, preco, imagem } = produto;

                    if (!categorias[categoria]) {
                        categorias[categoria] = [];
                    }
                    categorias[categoria].push({ nome, preco, imagem });
                    console.log(categorias)
                }

                res.render('menu', {
                    mostrarElementoEspecifico: true,
                    categorias: categorias,
                    isMenuPage: true
                });
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json({ error: 'Erro interno do servidor' });
            });
        });

        app.get('/menu', function (req, res) {
            const token = req.cookies.token;
            let nomeUsuario = '';
        
            if (token) {
                jwt.verify(token, 'Segredinho123', function(err, decoded) {
                    if (err) {
                        // Token inválido ou expirado
                        res.send('Token invalido ou expirado');
                    } else {
                        const email = decoded.email;
                        Cliente.findOne({
                            where: {
                                email: email
                            }
                        })
                        .then(function(cliente) {
                            if (cliente) {
                                nomeUsuario = cliente.nome;
                                res.cookie('NomeUsuario', nomeUsuario); // Primeiro nome do cliente

                                return Produto.findAll();
                            } else {
                                // Cliente não encontrado
                                res.send('Cliente não encontrado');
                            }
                        })
                        .then(function(produtos) {
                            const categorias = {};
                            for (const produto of produtos) {
                                const { categoria, nome, preco, imagem } = produto;
        
                                if (!categorias[categoria]) {
                                    categorias[categoria] = [];
                                }
        
                                categorias[categoria].push({ nome, preco, imagem });
                            }
        
                            res.render('menu', {
                                mostrarElementoEspecifico: true,
                                categorias: categorias,
                                isMenuPage: true
                            });
                        })
                        .catch(function(erro) {
                            res.status(500).json({ error: 'Houve um erro interno do servidor' });
                        });
                    }
                });
            } else {
                // Token não presente, continue para renderizar a página "/menu" sem nome de usuário
                Produto.findAll()
                    .then(function(produtos) {
                        const categorias = {};
                        for (const produto of produtos) {
                            const { categoria, nome, preco, imagem } = produto;
        
                            if (!categorias[categoria]) {
                                categorias[categoria] = [];
                            }
        
                            categorias[categoria].push({ nome, preco, imagem });
                        }
        
                        res.render('menu', {
                            mostrarElementoEspecifico: true,
                            categorias: categorias,
                            isMenuPage: true
                        });
                    })
                    .catch(function(erro) {
                        res.send('Houve um erro: ' + erro);
                    });
            }
        });
        
        app.get('/login', function(req,res){
            res.render('login')
        })

        app.get('/perfil', function(req,res){
            const token = req.cookies.token;
            jwt.verify(token, 'Segredinho123', function() {
                if(token){
                    res.render('perfil')
                } else {
                    res.render('login')
                    }
                }
            );
        })

        app.get('/cadastro', function(req,res){
            res.render('cadastro')
        })

        app.get('/logout', function(req, res) {
            // Remova o token do cliente (excluindo o cookie)
            res.clearCookie('token');
            res.clearCookie('NomeUsuario');
            res.redirect('/menu');
        });

        app.get('/pedido', (req, res) => {
            const produtos = JSON.parse(req.query.produtos);
            
            // Renderize a página de pedido (pedido.handlebars) e passe os dados do carrinho
            res.render('pedido', { produtos });
        });

        //ROTAS POST
        app.post('/cadastro/add', function(req, res) {
            Cliente.create({
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    telefone: req.body.telefone,
                    endereco: req.body.endereco,
                    cidade: req.body.cidade,
                    cep: req.body.cep,
                    email: req.body.email,
                    senha: req.body.senha,
                    isAdmin: false
            })
            .then(function() {
                res.redirect('/login');
            })
            .catch(function(erro) {
                console.log(erro)
                res.send('Houve um erro: ' + erro);
            });
        });

        app.post('/login/entrar', (req, res) => {
            const email = req.body.email;
            const senha = req.body.senha;
            // Consulta o banco de dados para verificar o usuário
            Cliente.findOne({
                where: {
                email: email
            }
            })
            .then(function (cliente) {
                if (!cliente) {
                  // Usuário não encontrado
                    res.send('Houve um erro: ' + erro);
                } else {
                if (cliente.senha === senha) {
                    const token = jwt.sign({ email: email }, 'Segredinho123');
                    res.cookie('token', token);
                    res.redirect('/menu');
                } else {
                    // Senha incorreta
                    res.send('Houve um erro: ' + erro);

                }
                }
            })
            .catch(function (erro) {
                // Erro de consulta ao banco de dados
                res.send('Houve um erro: ' + erro);

            });
        });

        app.get('/pedido/novo', (req, res) => {
            // Aqui você deve obter os dados dos produtos do banco de dados ou de qualquer outra fonte
            const produtos = [
                { nome: 'Produto 1', preco: 10.99, quantidade: 2 },
                { nome: 'Produto 2', preco: 19.99, quantidade: 1 },
                // Adicione mais produtos conforme necessário
            ];
        
            res.render('pedido', { produtos }); // Renderiza o template "pedido.handlebars" e passa os dados dos produtos
        });

    //Public
        app.use(express.static(path.join(__dirname,'public')));

app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081');
})