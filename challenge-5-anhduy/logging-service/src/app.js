const express = require('express');
const loggingRouter = require('./api/routes/register-logging.route');
const errorHandler = require('./utils/errors/error-handler');
const app = express();


app.use(express.json());

// app routes
app.use(loggingRouter());

//error handler
app.use(errorHandler);

module.exports = app;