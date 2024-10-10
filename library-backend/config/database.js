// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library_db', 'root', 'Azerty123456789!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
