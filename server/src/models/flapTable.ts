import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')

 
const flap = database.define('flap', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipoFlap: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

flap.sync({ alter: true });

module.exports = flap;
