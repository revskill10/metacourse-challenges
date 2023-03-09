const Joi = require('joi');
function validateUser(user){
const schema = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
   last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
   
    password_confirmation: Joi.ref('password'),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()

   

    
});return schema.validate(user);
}
module.exports = validateUser;