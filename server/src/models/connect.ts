import { Sequelize } from 'sequelize'


const connection = new Sequelize("embraer", "root", "Diego@000", {
    host: 'localhost',
    dialect: 'mysql'
})

connection.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com banco de dados");
})

module.exports = connection;