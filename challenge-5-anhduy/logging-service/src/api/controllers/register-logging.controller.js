const RegisterLoggingService = require('../../services/register-logging.service');

module.exports = function LoggingController() {
	const producer = async(req, res, next) => {		
		try {
			const user = req.body.user;
			const registerLoggingService = new RegisterLoggingService();
			await registerLoggingService.producer(user);
			res.status(200).json();
		} catch(err) {
			console.log(err);
			next(err);
		}	
	};
	
	return {
		producer
	};
}
