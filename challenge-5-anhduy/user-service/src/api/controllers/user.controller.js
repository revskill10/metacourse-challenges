const UserService = require('../../services/user.service');

module.exports = function UserController(redisClient) {
	const registerUser = async(req, res, next) => {
		try {		
			const data = req.body;
			const userService = new UserService(redisClient);
			const user = await userService.registerUser(data);		
			res.status(201).json({
				result: user
			});
		} catch(err) {
			next(err);
		}	
	};
	return {
		registerUser
	};
}
