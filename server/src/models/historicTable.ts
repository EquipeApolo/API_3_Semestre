import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const usersId =require('./userTable')
const flapId =require('./flapTable')
const airplaneId = require('./airplaneTable')

 
const historic = database.define('historic', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // userId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {      
    //       model: 'users',
    //       key: 'id'
    //     },
    // },
    // airplaneId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {      
    //       model: 'airplane',
    //       key: 'id'
    //     },
    // },
    result: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    unitOfMeasurement: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    aircraftWeight: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    temperature: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    wind: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    overspeed: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    altitude: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    slope: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

historic.belongsTo(usersId, {
    constraint: true,
    foreignKey: 'usersId'
})

historic.belongsTo(airplaneId, {
    constraint: true,
    foreignKey: 'airplaneId'
})

historic.belongsTo(flapId, {
    constraint: true,
    foreignKey: 'flapId'
})

historic.sync({ alter: true });

module.exports = historic;
