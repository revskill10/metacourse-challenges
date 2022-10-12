const Joi = require('joi');

function validateUser(user) {
	const joiSchema = Joi.object({
		fist_name: Joi.string().max(40),
		last_name: Joi.string().max(40),
		email: Joi.string().email(),
		password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z]+$')),
		password_confirmation: Joi.ref('password')			
	})
	return joiSchema.validate(user);
}
module.exports = { validateUser };