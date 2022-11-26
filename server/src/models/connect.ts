import { Sequelize } from 'sequelize'


const connection = new Sequelize("embraer", "fatecsjc", "Aluno123", {
      host: 'embraer.mysql.database.azure.com',
      dialect: 'mysql'
})

//  const connection = new Sequelize("embraer", "root", "fatecsjc", {
//       host: 'localhost',
//       dialect: 'mysql'
// })

connection.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com banco de dados");
})

module.exports = connection;