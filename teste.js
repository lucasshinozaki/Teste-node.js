//CONECTAR MYSQL COM SEQUELIZE
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'lucas', {
    host: "localhost",
    dialect: 'mysql'
})

//CONFIRMAÇÃO DE CONEXÃO
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})

//Models Postagem
//CRIANDO TABELA E ATRIBUTOS
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//PEDINDO PARA CRIAR A TABELA(RODAR SO UMA VEZ)
//Postagem.sync({force: true})
//CRIANDO TABELA E ATRIBUTOS

//ADICIONAR DADOS 
Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "asdasdasdasdasdasd"
})




const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})
//PEDINDO PARA CRIAR A TABELA
//Usuario.sync({force: true})

Usuario.create({
    nome:"Lucas",
    sobrenome:"Shinozaki",
    idade: 22,
    email:"lucas_shinozaki@hotmail.com"
})


