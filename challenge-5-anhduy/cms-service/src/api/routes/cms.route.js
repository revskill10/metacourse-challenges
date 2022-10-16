const express = require('express');
const CMSController = require('../controllers/cms.controller');

module.exports = function cmsRouter() {
	const router = new express.Router();
	const cmsController = new CMSController();

	router.post('/api/users-validation', cmsController.validateUserData);

	return router;
}
