"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const database = require('./connect');
const usersId = require('./userTable');
const airplaneId = require('./airplaneTable');
const historic = database.define('historic', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    result: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
historic.belongsTo(usersId, {
    constraint: true,
    foreignKey: 'usersId'
});
historic.belongsTo(airplaneId, {
    constraint: true,
    foreignKey: 'airplaneId'
});
module.exports = historic;
