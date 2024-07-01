const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./Student');

const Fee = sequelize.define('Fee', {
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('paid', 'unpaid'),
        allowNull: false,
    },
});

module.exports = Fee;
