
const userSchema = require('../api/schemas/user.schema');

module.exports = function ValidationService() {
	const validateUserData = async(data) => {		
		const { error } = userSchema.validate(data);
		return error;
	};
	return {
		validateUserData
	};
};

