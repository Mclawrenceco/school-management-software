const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./Student');
const Class = require('./Class');

const Grade = sequelize.define('Grade', {
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Student,
            key: 'id'
        }
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: 'id'
        }
    },
    assessment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    grade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Grade;
