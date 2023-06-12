const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const admin = require('./routes/admin.js');
const exphbs = require('express-handlebars');
const Produto = require('./models/Produto');
<<<<<<< HEAD
const Cliente = require('./models/Cliente.js')
const Pedido = require('./models/Pedido.js')
const Handlebars = require('handlebars');
=======
const Handlebars = require('handlebars');
const Cliente = require('./models/Cliente.js')
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
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
<<<<<<< HEAD
                    const { categoria, id, nome, preco, imagem } = produto;
=======
                    const { categoria, nome, preco, imagem } = produto;
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426

                    if (!categorias[categoria]) {
                        categorias[categoria] = [];
                    }
<<<<<<< HEAD
                    categorias[categoria].push({ id, nome, preco, imagem });
                }

                res.render('menu', {
                    categorias: categorias,
                    isMenuPage: true,
                    MenuPageHeader:true
=======
                    categorias[categoria].push({ nome, preco, imagem });
                    console.log(categorias)
                }

                res.render('menu', {
                    mostrarElementoEspecifico: true,
                    categorias: categorias,
                    isMenuPage: true
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
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
<<<<<<< HEAD
                                res.cookie('NomeUsuario', nomeUsuario); 
=======
                                res.cookie('NomeUsuario', nomeUsuario); // Primeiro nome do cliente
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426

                                return Produto.findAll();
                            } else {
                                // Cliente não encontrado
                                res.send('Cliente não encontrado');
                            }
                        })
                        .then(function(produtos) {
                            const categorias = {};
                            for (const produto of produtos) {
<<<<<<< HEAD
                                const { categoria, id, nome, preco, imagem } = produto;
                                
                                if (!categorias[categoria]) {
                                    categorias[categoria] = [];
                                }
                                
                                categorias[categoria].push({ id, nome, preco, imagem });
                                
                            }
        
                            res.render('menu', {
                                logado: true,
                                categorias: categorias,
                                isMenuPage: true,
                                MenuPageHeader:true
=======
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
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
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
<<<<<<< HEAD
                            const { categoria, id, nome, preco, imagem } = produto;
=======
                            const { categoria, nome, preco, imagem } = produto;
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
        
                            if (!categorias[categoria]) {
                                categorias[categoria] = [];
                            }
<<<<<<< HEAD
                            
                            categorias[categoria].push({ id, nome, preco, imagem });
                        }
        
                        res.render('menu', {
                            MenuPageHeader: true,
=======
        
                            categorias[categoria].push({ nome, preco, imagem });
                        }
        
                        res.render('menu', {
                            mostrarElementoEspecifico: true,
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
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
<<<<<<< HEAD
            // Decodificar o token para obter as informações do cliente
            const token = req.cookies.token;
            const decodedToken = jwt.verify(token, 'Segredinho123');
        
            // Extrair as informações do cliente do token decodificado
            const endereco = decodedToken.endereco;
            const cep = decodedToken.cep;
            const cidade = decodedToken.cidade;
        
            // Dados do cliente
            const cliente = {
                endereco: endereco,
                cep: cep,
                cidade: cidade
            };
            
            const produtos = JSON.parse(req.query.produtos);
            // Renderizar a página de pedido (pedido.handlebars) e passar os dados do cliente e do carrinho
            res.render('pedido', {
                cliente,
                produtos
            });
        });
        app.get('/finalizacao', function(req,res){
            res.render('finalizacao')
        })
=======
            const produtos = JSON.parse(req.query.produtos);
            
            // Renderize a página de pedido (pedido.handlebars) e passe os dados do carrinho
            res.render('pedido', { produtos });
        });
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426

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
<<<<<<< HEAD
                    if (cliente.senha === senha) {
                        const tokenData = {
                            id: cliente.id,
                            email: cliente.email,
                            endereco: cliente.endereco,
                            cep: cliente.cep,
                            cidade: cliente.cidade
                        };
                    
                        const token = jwt.sign(tokenData, 'Segredinho123');
                        res.cookie('token', token);
                        res.redirect('/menu');
                    
=======
                if (cliente.senha === senha) {
                    const token = jwt.sign({ email: email }, 'Segredinho123');
                    res.cookie('token', token);
                    res.redirect('/menu');
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
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

<<<<<<< HEAD
        app.post('/pedido/dados', (req, res) => {
            const token = req.cookies.token;
            const decodedToken = jwt.verify(token, 'Segredinho123');
            const clienteId = decodedToken.id;
            
            
            const { ids_prod, quantidadesProdutos, precoFinal, dataEmissao } = req.body;


            Pedido.create({
                    id_cli: clienteId,
                    ids_prod: ids_prod,
                    quantidadesProd: quantidadesProdutos,
                    precoFinal: precoFinal,
                    DataEmissao: dataEmissao
            })
            .then(function() {
                res.redirect('/menu');
            })
            .catch(function(erro) {
                console.log(erro)
                res.send('Houve um erro: ' + erro);
            });
=======
        app.get('/pedido/novo', (req, res) => {
            // Aqui você deve obter os dados dos produtos do banco de dados ou de qualquer outra fonte
            const produtos = [
                { nome: 'Produto 1', preco: 10.99, quantidade: 2 },
                { nome: 'Produto 2', preco: 19.99, quantidade: 1 },
                // Adicione mais produtos conforme necessário
            ];
        
            res.render('pedido', { produtos }); // Renderiza o template "pedido.handlebars" e passa os dados dos produtos
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
        });

    //Public
        app.use(express.static(path.join(__dirname,'public')));

app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081');
})