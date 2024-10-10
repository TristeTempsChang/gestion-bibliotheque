// models/Reservation.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Book = require('./Book');
const User = require('./User');

const Reservation = sequelize.define('Reservation', {
    reservationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

Reservation.belongsTo(Book);
Reservation.belongsTo(User);

module.exports = Reservation;
