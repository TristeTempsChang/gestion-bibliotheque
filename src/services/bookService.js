// src/services/bookService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/books';

// Récupère tous les livres
export const getBooks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

// Emprunte un livre
export const borrowBook = async (bookId, userId) => {
    try {
        await axios.post(`${API_URL}/borrow`, { bookId, userId });
    } catch (error) {
        console.error('Error borrowing book:', error);
        throw error;
    }
};

// Retourne un livre
export const returnBook = async (bookId, userId) => {
    try {
        await axios.post(`${API_URL}/return`, { bookId, userId });
    } catch (error) {
        console.error('Error returning book:', error);
        throw error;
    }
};

// Réserve un livre
export const reserveBook = async (bookId, userId) => {
    try {
        await axios.post(`${API_URL}/reserve`, { bookId, userId });
    } catch (error) {
        console.error('Error reserving book:', error);
        throw error;
    }
};
