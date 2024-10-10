// models/Loan.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Book = require('./Book');
const User = require('./User');

const Loan = sequelize.define('Loan', {
    loanDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false
});

Loan.belongsTo(Book);
Loan.belongsTo(User);

module.exports = Loan;
