"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection = new sequelize_1.Sequelize("embraer", "fatecsjc", "Aluno123", {
    host: 'embraer.mysql.database.azure.com',
    dialect: 'mysql'
});
connection.authenticate()
    .then(function () {
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function () {
    console.log("Erro: Conexão com banco de dados");
});
module.exports = connection;
