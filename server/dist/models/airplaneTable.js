"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const database = require('./connect');
const airplane = database.define('airplane', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    engine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    certification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    flap: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reverserAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
airplane.sync({ alter: true });
module.exports = airplane;
