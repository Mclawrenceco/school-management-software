const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./Student');

const Attendance = sequelize.define('Attendance', {
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: 'id'
        }
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('present', 'absent', 'late'),
        allowNull: false,
    },
});

module.exports = Attendance;
