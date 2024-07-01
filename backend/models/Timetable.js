const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Class = require('./Class');

const Timetable = sequelize.define('Timetable', {
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: 'id'
        }
    },
    day: {
        type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'),
        allowNull: false,
    },
    period: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teacher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Timetable;
