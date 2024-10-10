// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initDb } = require('./models');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/reservations', reservationRoutes);

// Initialisation de la base de données et démarrage du serveur
initDb().then(() => {
    app.listen(3001, () => {
        console.log('Server running on http://localhost:3001');
    });
});
