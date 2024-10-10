// routes/loanRoutes.js
const express = require('express');
const { createLoan, returnLoan } = require('../controllers/loanController');

const router = express.Router();

router.post('/', createLoan);
router.put('/:loanId/return', returnLoan);

module.exports = router;
