"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const database = require('./connect');
const airplaneId = require('./airplaneTable');
const flapId = require('./flapTable');
airplaneId.belongsToMany(flapId, { through: 'airplaneFlap' });
flapId.belongsToMany(airplaneId, { through: 'airplaneFlap' });
const airplaneFlap = database.define('airplaneFlap', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    airplaneId: {
        type: Sequelize.INTEGER,
        references: {
            model: airplaneId,
            key: 'id'
        }
    },
    flapId: {
        type: Sequelize.INTEGER,
        references: {
            model: flapId,
            key: 'id'
        }
    }
});
module.exports = airplaneFlap;
