// services/userService.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

// Crée un nouvel utilisateur
const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({ name, email, password: hashedPassword });
};

// Authentifie un utilisateur
const authenticateUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Incorrect password');

    return user;
};

// Récupère un utilisateur par ID
const getUserById = async (userId) => {
    return await User.findByPk(userId);
};

module.exports = { createUser, authenticateUser, getUserById };
