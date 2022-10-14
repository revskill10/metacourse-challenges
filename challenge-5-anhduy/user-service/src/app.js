const express = require('express');
const userRouter = require('./api/routes/user.route');
const errorHandler = require('./utils/errors/error-handler');
const redisConnect = require('./database/redis/connection');
const app = express();



app.use(express.json());

//connect to redis
const redisClient = redisConnect();

// app routes
app.use(userRouter(redisClient));

//error handler
app.use(errorHandler);

module.exports = app;

