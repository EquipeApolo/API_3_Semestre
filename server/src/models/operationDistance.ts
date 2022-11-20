import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const flapId = require('./flapTable')
 
const operationDistance = database.define('operationDistance', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    refWithoutIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    refWithIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weightReference: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weightBellowWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weightAboveWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weightBellowWithIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weightAboveWithIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    altitudeReference:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    altitudeWithIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    altitudeWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tempReference: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tempBellowWithIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tempAboveWithIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tempBellowWithoutIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tempAboveWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    windReference: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    windHeadWithIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    windTailWithIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    windHeadWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    windTailWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    slopeReference: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    slopeUphillWithIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    slopeDownhillWithIce:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    slopeUphillWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    slopeDownhillWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    overspeedReference: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    overspeedWithIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    overspeedWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reverserWithIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reverserWithoutIce: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

operationDistance.belongsTo(flapId, {
    constraint: true,
    foreignKey: 'flapId'
})

//operationDistance.sync({ alter: true });

module.exports = operationDistance;