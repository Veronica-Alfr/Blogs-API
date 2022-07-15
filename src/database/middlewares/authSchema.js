const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
});

module.exports = { schemaLogin };
