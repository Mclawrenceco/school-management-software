const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Student = sequelize.define('Student', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Student;
