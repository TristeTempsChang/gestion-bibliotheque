// controllers/loanController.js
const loanService = require('../services/loanService');

// Crée un nouvel emprunt
const createLoan = async (req, res) => {
    const { bookId, userId } = req.body;
    try {
        const loan = await loanService.createLoan(bookId, userId);
        res.status(201).json({ message: 'Loan created successfully', loan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Met à jour l’emprunt pour retour
const returnLoan = async (req, res) => {
    const { loanId } = req.params;
    try {
        const loan = await loanService.returnLoan(loanId);
        res.status(200).json({ message: 'Loan returned successfully', loan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createLoan, returnLoan };
