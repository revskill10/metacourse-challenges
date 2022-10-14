const axios = require('axios');

function ValidationClientService() {
	this.baseURL = process.env.USER_SERVICE_URL || 'http://localhost:3003';
}

ValidationClientService.prototype.validateUser = async function (data) {
	const config = {
		url: `${this.baseURL}/api/users-validation`,
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		data
	};
	const response = await axios(config);
	return response.data;
};



module.exports = ValidationClientService;