const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const connectDB = require('./config/database');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', itemRoutes);

// Connect to Database
connectDB();

module.exports = app;