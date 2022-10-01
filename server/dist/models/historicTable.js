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
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
    },
    airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'airplane',
            key: 'id'
        },
    },
    result: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
historic.sync({ alter: true });
module.exports = historic;
