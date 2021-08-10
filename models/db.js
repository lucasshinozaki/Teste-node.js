const Sequelize = require('sequelize')

//CONEXÃO COM O BANCO DE DADOS MYSQL
  const sequelize = new Sequelize('postapp', 'root', 'lucas', {
    host: "localhost",
    dialect: 'mysql'
})

//exporta sequelize
module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize 
}