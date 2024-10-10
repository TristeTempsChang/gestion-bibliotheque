// controllers/userController.js
const userService = require('../services/userService');

// Inscription d’un nouvel utilisateur
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userService.createUser(name, email, password);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Connexion de l’utilisateur
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.authenticateUser(email, password);
        res.status(200).json({ message: 'User authenticated', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { signup, login };
