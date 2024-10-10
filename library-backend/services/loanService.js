// services/loanService.js
const { Loan, Book } = require('../models');

// Crée un nouvel emprunt
const createLoan = async (bookId, userId) => {
    const book = await Book.findByPk(bookId);
    if (!book || !book.status) throw new Error('Book is not available');

    await book.update({ status: false });
    return await Loan.create({ bookId, userId, loanDate: new Date() });
};

// Met à jour un emprunt pour indiquer un retour
const returnLoan = async (loanId) => {
    const loan = await Loan.findByPk(loanId);
    if (!loan) throw new Error('Loan not found');

    const book = await Book.findByPk(loan.bookId);
    await book.update({ status: true });
    return await loan.update({ returnDate: new Date() });
};

// Récupère les emprunts d'un utilisateur
const getUserLoans = async (userId) => {
    return await Loan.findAll({ where: { userId } });
};

module.exports = { createLoan, returnLoan, getUserLoans };
