const express = require('express');
const UserController = require('../controllers/user.controller');


module.exports = function userRouter(redisClient) {	
	const router = new express.Router();
	const userController = new UserController(redisClient);

	router.post('/api/register', userController.registerUser);
	router.get('/api/users/:email', userController.getUserByEmail);
	router.get('/api/users', userController.getAllUsers);
	

	return router;
}
