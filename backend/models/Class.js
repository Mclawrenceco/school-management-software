const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Teacher = require('./Teacher');

const Class = sequelize.define('Class', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Teacher,
            key: 'id'
        }
    },
});

module.exports = Class;
