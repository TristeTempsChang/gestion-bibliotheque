// routes/reservationRoutes.js
const express = require('express');
const { createReservation, cancelReservation } = require('../controllers/reservationController');

const router = express.Router();

router.post('/', createReservation);
router.delete('/:reservationId', cancelReservation);

module.exports = router;
