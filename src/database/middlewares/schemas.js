const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().required().min(6).messages({
        'string.empty': 'Some required fields are missing',
    }),
});

const schemaUser = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    image: Joi.string().required(),
});

module.exports = { schemaLogin, schemaUser };
