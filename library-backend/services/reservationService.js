// services/reservationService.js
const { Reservation, Book } = require('../models');

// Crée une nouvelle réservation
const createReservation = async (bookId, userId) => {
    const book = await Book.findByPk(bookId);
    if (!book || !book.status) throw new Error('Book is not available for reservation');

    return await Reservation.create({ bookId, userId, reservationDate: new Date() });
};

// Annule une réservation
const cancelReservation = async (reservationId) => {
    const reservation = await Reservation.findByPk(reservationId);
    if (!reservation) throw new Error('Reservation not found');

    await reservation.destroy();
};

module.exports = { createReservation, cancelReservation };
