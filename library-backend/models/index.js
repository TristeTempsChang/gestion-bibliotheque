// models/index.js
const sequelize = require('../config/database');
const Book = require('./Book');
const User = require('./User');
const Loan = require('./Loan');
const Reservation = require('./Reservation');

const initDb = async () => {
    await sequelize.sync({ force: false });
};

module.exports = { Book, User, Loan, Reservation, initDb };
