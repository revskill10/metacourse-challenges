const express = require('express');
const UserController = require('../controllers/user.controller');


module.exports = function userRouter(redisClient) {
	const router = new express.Router();
	const userController = new UserController(redisClient);

	router.post('/api/register', userController.registerUser);

	return router;
}
