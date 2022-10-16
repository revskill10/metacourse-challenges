const ValidationService = require('../../services/validation.service');

module.exports = function CMSController() {
	const validateUserData = async(req, res, next) => {
		try {	
			const data = req.body;			
			const validationService = new ValidationService();
			const error = await validationService.validateUserData(data);			
			res.status(200).json({
				error
			});
		} catch(err) {
			next(err);
		}	
	};
	return {
		validateUserData
	};
}
