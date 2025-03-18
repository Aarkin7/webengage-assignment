const express = require('express');
const csvRoutes = require('./routes/csvRoutes');

const app = express();

app.use('/generate-csv', csvRoutes);

module.exports = app;
