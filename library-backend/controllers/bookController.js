// controllers/bookController.js
const bookService = require('../services/bookService');

// Contrôleur pour obtenir tous les livres
const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Contrôleur pour emprunter un livre
const borrowBook = async (req, res) => {
    const { bookId, userId } = req.body;
    try {
        await bookService.borrowBook(bookId, userId);
        res.status(200).json({ message: 'Book borrowed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllBooks, borrowBook };
