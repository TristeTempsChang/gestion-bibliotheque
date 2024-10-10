// src/services/loanService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/loans';

// Crée un nouvel emprunt
export const createLoan = async (bookId, userId) => {
    try {
        await axios.post(API_URL, { bookId, userId });
    } catch (error) {
        console.error('Error creating loan:', error);
        throw error;
    }
};

// Met à jour un emprunt pour indiquer un retour
export const updateLoanReturn = async (loanId) => {
    try {
        await axios.put(`${API_URL}/${loanId}/return`);
    } catch (error) {
        console.error('Error updating loan return:', error);
        throw error;
    }
};

// Récupère les emprunts par utilisateur
export const getUserLoans = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user loans:', error);
        throw error;
    }
};
