// src/services/reservationService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/reservations';

// Crée une nouvelle réservation
export const createReservation = async (bookId, userId) => {
    try {
        await axios.post(API_URL, { bookId, userId });
    } catch (error) {
        console.error('Error creating reservation:', error);
        throw error;
    }
};

// Annule une réservation
export const cancelReservation = async (reservationId) => {
    try {
        await axios.delete(`${API_URL}/${reservationId}`);
    } catch (error) {
        console.error('Error cancelling reservation:', error);
        throw error;
    }
};

// Récupère les réservations d’un utilisateur
export const getUserReservations = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user reservations:', error);
        throw error;
    }
};
