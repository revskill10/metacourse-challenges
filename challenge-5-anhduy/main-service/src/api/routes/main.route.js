const express = require('express');
const MainController = require('../controllers/main.controller');

module.exports = function mainRouter() {
	const router = new express.Router();
	const mainController = new MainController();

	router.post('/api/users', mainController.userOperation);

	return router;
}
