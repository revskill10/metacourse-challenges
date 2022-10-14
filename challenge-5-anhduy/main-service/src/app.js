const express = require('express');
const mainRouter = require('./api/routes/main.route');
const errorHandler = require('./utils/errors/error-handler');
const app = express();


app.use(express.json());

// app routes
app.use(mainRouter());

//error handler
app.use(errorHandler);

module.exports = app;