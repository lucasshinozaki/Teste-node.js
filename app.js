const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


// CONFIGURAÇÕES
    //TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handleabars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())

//ROTAS
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home.handlebars', {posts: posts})
        })
        
    })

    app.get('/cad', function(req, res){
        res.render('formulario.handlebars')
    })

    //ROTA SÓ ACESSADA COM METHOD POST
    //não acessada pela url, serve principalmente para formularios
    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
              res.send("Postagem deletada com sucesso")
              res.redirect('/')  
        }).catch(function(erro){
            res.send("Essa postagem não existe|")
        })
    })

//SERVIDOR HTTP: tem que ser a ultima linha do codigo
//acesso: localhost:8081 e função de callback
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})