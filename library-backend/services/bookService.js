// services/bookService.js
const { Book } = require('../models');

// Récupère tous les livres
const getAllBooks = async () => {
    return await Book.findAll();
};

// Emprunte un livre
const borrowBook = async (bookId, userId) => {
    const book = await Book.findByPk(bookId);
    if (book && book.status) {
        book.status = false;
        await book.save();
        // Crée un nouvel emprunt dans la table des emprunts
    } else {
        throw new Error('Book is not available');
    }
};

// Retourne un livre
const returnBook = async (bookId) => {
    const book = await Book.findByPk(bookId);
    if (book && !book.status) {
        book.status = true;
        await book.save();
    } else {
        throw new Error('Book is not borrowed');
    }
};

module.exports = { getAllBooks, borrowBook, returnBook };
