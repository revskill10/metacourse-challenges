const Joi = require('joi');

function validateUser(user) {
  const schema = Joi.object({
    first_name: Joi.string()
      .alphanum()
      .min(3)
      .max(40)
      .required(),
    last_name: Joi.string()
      .alphanum()
      .min(3)
      .max(40)
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z]{8,40}$'))
      .required(),
    password_confirmation: Joi.ref('password'),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
  });

  return schema.validate(user);
}

module.exports = validateUser;
