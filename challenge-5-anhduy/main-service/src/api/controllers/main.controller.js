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
				
				if (error) {
					throw new BadRequestError('User data is invalid');
				}
				
				//call user service to register user				
				const userClientService = new UserClientService();
				const response = await userClientService.registerUser(data);
				const result = response.result;							
				res.status(201).json({ result });
			}
		} catch (err) {
			next(err);
		}
	};
	return {
		userOperation
	};
};
