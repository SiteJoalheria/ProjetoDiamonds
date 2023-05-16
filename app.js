const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post.js')
const path = require('path');
const admin = require('./routes/admin.js')

//Config template
        var handle = exphbs.create({
            defaultLayout: 'main'
            });
    //handlebars
        app.engine('handlebars', handle.engine);
        app.set('view engine', 'handlebars');

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

    //Rotas
        app.use('/admin', admin)

        app.get('/', function(req,res){
            res.render('menu')
        })

        app.get('/login', function(req,res){
            res.render('login')
        })

        app.get('/cadastro', function(req,res){
            res.render('cadastro')
        })
    //Public
        app.use(express.static(path.join(__dirname,'public')));

app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081');
})
