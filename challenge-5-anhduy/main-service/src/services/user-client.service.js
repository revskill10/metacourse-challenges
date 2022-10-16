const axios = require('axios');

function UserClientService() {
	this.baseURL = process.env.USER_SERVICE_URL || 'http://localhost:3002';
}

UserClientService.prototype.registerUser = async function (data) {
	const config = {
		url: `${this.baseURL}/api/register`,
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		data
	};
	const response = await axios(config);
	return response.data;
};

UserClientService.prototype.getAllUsers = async function () {
	const config = {
		url: `${this.baseURL}/api/users`,
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
	const response = await axios(config);
	return response.data;
};

UserClientService.prototype.getUserByEmail = async function (email) {
	const config = {
		url: `${this.baseURL}/api/users/${email}`,
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
	const response = await axios(config);
	return response.data;
};



module.exports = UserClientService;