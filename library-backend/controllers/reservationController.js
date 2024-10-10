// controllers/reservationController.js
const reservationService = require('../services/reservationService');

// Crée une nouvelle réservation
const createReservation = async (req, res) => {
    const { bookId, userId } = req.body;
    try {
        const reservation = await reservationService.createReservation(bookId, userId);
        res.status(201).json({ message: 'Reservation created successfully', reservation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Annule une réservation
const cancelReservation = async (req, res) => {
    const { reservationId } = req.params;
    try {
        await reservationService.cancelReservation(reservationId);
        res.status(200).json({ message: 'Reservation cancelled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createReservation, cancelReservation };
