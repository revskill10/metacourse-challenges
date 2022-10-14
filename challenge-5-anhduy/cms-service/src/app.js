const express = require('express');
const cmsRouter = require('./api/routes/cms.route');
const errorHandler = require('./utils/errors/error-handler');
const app = express();

app.use(express.json());

// app routes
app.use(cmsRouter());

//error handler
app.use(errorHandler);


module.exports = app;