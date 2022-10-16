const UserClientService = require('../../services/user-client.service');
const ValidationClientService = require('../../services/validation-client.service');
const { BadRequestError } = require('../../utils/errors/custom-error');

module.exports = function MainController() {
	const userOperation = async(req, res, next) => {	
		try {
			const { op, data } = req.body;
			
			if (op === 'register') {
				
				//validate user data
				const validationClientService = new ValidationClientService();
				const { error } = await validationClientService.validateUser(data);
				console.log("error: ", error);
				if (error) {
					throw new BadRequestError('User data is invalid');
				}
				
				//call user service to check if email exist				
				const userClientService = new UserClientService();
				let response = await userClientService.getUserByEmail(data.email);				
				let result = response.result;	
				if (result) {
					throw new BadRequestError('Email already exists !');
				}
				//call user service to check if email exist
				response = await userClientService.registerUser(data);
				result = response.result;								
				res.status(201).json({ result });
			} else if (op == 'getAll') {				
				//call user service to get all users					
				const userClientService = new UserClientService();
				const response = await userClientService.getAllUsers();
				const result = response.result;							
				res.status(200).json({ result });
			} 
		} catch (err) {
			next(err);
		}
	};
	return {
		userOperation
	};
};
