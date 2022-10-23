const express = require('express');
const LoggingController = require('../controllers/register-logging.controller');


module.exports = function loggingRouter() {	
	const router = new express.Router();
	const loggingController = new LoggingController();

	router.post('/api/logging', loggingController.producer);	

	return router;
}
