const Joi = require('joi');

const schemaLogin = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().required().min(6).messages({
        'string.empty': 'Some required fields are missing',
    }),
});

const validateUser = (body) => {
    const schemaUser = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    image: Joi.string().required(),
});

  const { error, value } = schemaUser.validate(body);
    if (error) return { error: { code: 400, message: error.details[0].message } };
 
    return value;
};

module.exports = { schemaLogin, validateUser };
