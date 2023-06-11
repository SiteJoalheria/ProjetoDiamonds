const express = require ("express")
const router = express.Router()
const fornecedor = require('../models/Fornecedor');
const produto = require('../models/Produto');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const cliente = require("../models/Cliente");

router.use(function(req, res, next) {
    // Verifique a presença e a validade do token de autenticação aqui
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'Acesso não autorizado1' });
    }

    // Verificação do token
    jwt.verify(token, 'Segredinho123', function(err, decoded) {
    if (err) {
        return res.status(401).json({ error: 'Acesso não autorizado2' });
    }

    const email = decoded.email;

        // Consulta ao banco de dados para verificar se o usuário é um administrador
        cliente.findOne({ where: { email: email } })
        .then(function(resultado) {
             // Verifique o valor retornado pelo banco de dados

            if (!resultado || !resultado.isAdmin) {
            return res.status(401).json({ error: 'Acesso não autorizado3' });
    }

        // O usuário é um administrador, prossiga para as rotas abaixo
        req.user = {
            email: email,
            isAdmin: true
        };

        next();
        })
        .catch(function(erro) {
            console.log(erro); // Adicione esta linha para registrar possíveis erros do banco de dados
            return res.status(500).json({ error: 'Erro interno do servidor4' });
        });
    });
});


// Configuração do multer para salvar os arquivos no diretório desejado
const storage = multer.diskStorage({
    destination: 'public/ImagensCad/', // Especifica o diretório onde deseja salvar as imagens
    filename: function (req, file, cb) {
        // Gera um nome único para o arquivo usando a extensão original
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

const upload = multer({ storage: storage });

router.get('/menuadmin', (req, res) => {
    const isAdmin = req.user.isAdmin; // Verifica se o usuário é administrador

    if (isAdmin) {
        res.render('admin/menuadmin');
    } else {
        res.send('Acesso negado. Você não é um administrador.');
    }
});

router.get('/produtos', (req, res) => {
    produto.findAll()
        .then((produtos) => {
            res.render('admin/produtos', { produtos });
        })
        .catch((erro) => {
            res.send('Houve um erro: ' + erro);
        });
});

router.get('/fornecedores', (req,res) => {
    fornecedor.findAll()
    .then((fornecedores) => {
    res.render('admin/fornecedores', { fornecedores });
    })
    .catch((erro) => {
    res.send('Houve um erro: ' + erro);
    });
});

router.get('/clientes', (req, res) => {
    cliente.findAll()
        .then((cliente) => {
            res.render('admin/clientes', { cliente });
        })
        .catch((erro) => {
            res.send('Houve um erro: ' + erro);
        });
});

router.get('/editarcliente/:id', (req, res) => {
    const id = req.params.id;
    cliente.findByPk(id)
    .then((cliente) => {
        res.render('admin/editarcliente', { cliente });
    })
    .catch((error) => {
        res.send('Houve um erro: ' + error);
    });
});

router.get('/adicionarforne', (req,res) => {
    res.render('admin/adicionarforne')
})

router.get('/editarforne/:id', (req, res) => {
    const id = req.params.id;
    fornecedor.findByPk(id)
    .then((fornecedor) => {
        res.render('admin/editarforne', { fornecedor });
    })
    .catch((error) => {
        res.send('Houve um erro: ' + error);
    });
});

router.get('/excluirforne/:id', (req, res) => {
    const id = req.params.id;
    fornecedor.findByPk(id)
    .then((fornecedor) => {
        res.render('admin/excluirforne', { fornecedor });
    })
    .catch((error) => {
        res.send('Houve um erro: ' + error);
    });
});

router.get('/adicionarprod', (req, res) => {
    fornecedor.findAll()
    .then((fornecedores) => {
        res.render('admin/adicionarprod', { fornecedores });
    })
    .catch((erro) => {
        res.send('Houve um erro: ' + erro);
    });
});

router.get('/editarprod/:id', (req, res) => {
    const id = req.params.id;
    produto.findByPk(id)
        .then((produtos) => {
        fornecedor.findAll()
            .then((fornecedores) => {
            res.render('admin/editarprod', { produtos, fornecedores });
        })
        .catch((erro) => {
            res.send('Houve um erro: ' + erro);
        });
    })
    .catch((erro) => {
        res.send('Houve um erro: ' + erro);
    });
});

router.get('/excluirprod/:id', (req, res) => {
    const id = req.params.id;
    produto.findByPk(id)
    .then((produtos) => {
        res.render('admin/excluirprod', { produtos });
    })
    .catch((error) => {
        res.send('Houve um erro: ' + error);
    });
});

router.get('/excluircliente/:id', (req, res) => {
    const id = req.params.id;
    cliente.findByPk(id)
    .then((cliente) => {
        res.render('admin/excluircliente', { cliente });
    })
    .catch((error) => {
        res.send('Houve um erro: ' + error);
    });
});

//ROTAS POST --------------------------------------------------------------

router.post('/adicionarprod/add', upload.single('imagem'), function(req, res) {
    const caminhoImagem = '/ImagensCad/' + req.file.filename;
        produto.create({
            nome: req.body.nome,
            preco: req.body.preco,
            nomeForne: req.body.fornecedor,
            quantidade: req.body.quantidade,
            imagem: caminhoImagem, // Salva o arquivo como um objeto de fluxo de bytes
            categoria: req.body.categoria
        })
        .then(function() {
            res.redirect('/admin/adicionarprod');
        })
        .catch(function(erro) {
            res.send('Houve um erro: ' + erro);
        });
});

router.post('/editarprod/:id', upload.single('imagem'), function(req, res) {
    const id = req.params.id;
    const caminhoImagem = '/ImagensCad/' + req.file.filename;
    produto.update({
        nome: req.body.nome,
        preco: req.body.preco,
        nomeForne: req.body.fornecedor,
        quantidade: req.body.quantidade,
        imagem: caminhoImagem,
        categoria: req.body.categoria
    }, {
    where: {
        id: id
    }
    })
    .then(function() {
        res.redirect('/admin/produtos');
    })
    .catch(function(erro) {
        res.send('Houve um erro: ' + erro);
    });
});

router.post('/excluirprod/:id', function(req, res) {
    const id = req.params.id;
    console.log("ID do produto a ser excluído:", id); 

    produto.destroy({
        where: { id: id }
    })
    .then(() => {
        console.log("Produto excluído com sucesso");
        res.redirect('/admin/produtos'); 
    })
    .catch((error) => {
        console.error(error);
        res.send('Não foi possível deletar o cadastro.'); 
    });
});

router.post('/adicionarforne/add', function(req, res) {
        fornecedor.create({
            razaoSocial: req.body.razaoSocial,
            nomeFantasia: req.body.nomeFantasia,
            cnpj: req.body.cnpj,
            email: req.body.email,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
            cep: req.body.cep,
            cidade: req.body.cidade
        })
        .then(function() {
            res.redirect('/admin/fornecedores');
        })
        .catch(function(error) {
            res.send('Houve um erro: ' + error);
        });
    });

router.post('/editarforne/:id', function(req, res) {
    const id = req.params.id;
    console.log(id)
    fornecedor.update({
        razaoSocial: req.body.razaoSocial,
        nomeFantasia: req.body.nomeFantasia,
        cnpj: req.body.cnpj,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cep: req.body.cep,
        cidade: req.body.cidade
    }, {
    where: {
        id: id
    }
    })
    .then(function() {
        res.redirect('/admin/fornecedores');
    })
    .catch(function(error) {
        res.send('Houve um erro: ' + error);
    });
});



router.post('/excluirforne/:id', function(req, res) {
    const id = req.params.id;
    console.log("ID do fornecedor a ser excluído:", id); 

    fornecedor.destroy({
        where: { id: id }
    })
    .then(() => {
        console.log("Fornecedor excluído com sucesso");
        res.redirect('/admin/fornecedores'); 
    })
    .catch((error) => {
        console.error(error);
        res.send('Não foi possível deletar o cadastro.'); 
    });
});


router.post('/editarcliente/:id', function(req, res) {
    const id = req.params.id;
    console.log(id)
    cliente.update({
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        cep: req.body.cep,
        email: req.body.email,
        senha: req.body.senha,
        isAdmin: false
}, {
    where: {
        id: id
    }
    })
    .then(function() {
        res.redirect('/admin/clientes');
    })
    .catch(function(error) {
        res.send('Houve um erro: ' + error);
    });
});

router.post('/excluircliente/:id', function(req, res) {
    const id = req.params.id;
    console.log("ID do fornecedor a ser excluído:", id); 

    cliente.destroy({
        where: { id: id }
    })
    .then(() => {
        console.log("Cliente excluído com sucesso");
        res.redirect('/admin/clientes'); 
    })
    .catch((error) => {
        console.error(error);
        res.send('Não foi possível deletar o cadastro.'); 
    });
});




module.exports = router