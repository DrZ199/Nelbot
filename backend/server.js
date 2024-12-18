const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pediatricsRoutes = require('./routes/pediatricsRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', pediatricsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
