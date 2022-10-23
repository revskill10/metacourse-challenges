const UserService = require('../../services/user.service');
const axios = require('axios');

module.exports = function UserController(redisClient) {
	const registerUser = async(req, res, next) => {
		try {		
			const data = req.body;
			const userService = new UserService(redisClient);
			const user = await userService.registerUser(data);			
			//send information to logging service
			axios.post('http://localhost:3004/api/logging', {
				user
			})

			res.status(201).json({
				result: user
			});
		} catch(err) {
			console.log(err);
			next(err);
		}	
	};
	const getAllUsers = async(req, res, next) => {
		try {			
			const userService = new UserService(redisClient);
			const users = await userService.getAllUsers();
			res.status(200).json({
				result: users
			});
		} catch(err) {
			console.log(err);
			next(err);
		}	
	};
	const getUserByEmail = async(req, res, next) => {
		try {					
			const userService = new UserService(redisClient);
			const email = req.params.email;
			const user = await userService.getUserByEmail(email);
			
			res.status(200).json({
				result: user
			});
		} catch(err) {
			console.log(err);
			next(err);
		}	
	};
	return {
		registerUser,
		getAllUsers,
		getUserByEmail
	};
}
