const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().required().min(6).messages({
        'string.empty': 'Some required fields are missing',
    }),
});

module.exports = { schemaLogin };
