// routes/bookRoutes.js
const express = require('express');
const { getAllBooks, borrowBook } = require('../controllers/bookController');

const router = express.Router();

router.get('/', getAllBooks);
router.post('/borrow', borrowBook);

module.exports = router;
