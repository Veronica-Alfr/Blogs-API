const Joi = require('joi');

const fieldsMissing = 'Some required fields are missing';

const schemaLogin = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': fieldsMissing,
    }),
    password: Joi.string().required().min(6).messages({
        'string.empty': fieldsMissing,
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

const validateCategory = (body) => {
    const schemaCategory = Joi.object({
        name: Joi.string().required(),
    });

    const { error, value } = schemaCategory.validate(body);
    if (error) return { error: { code: 400, message: error.details[0].message } };
 
    return value;
};

const validatePost = (body) => {
    const schemaPost = Joi.object({
        title: Joi.string().required().messages({
            'string.empty': fieldsMissing,
        }),
        content: Joi.string().required().messages({
            'string.empty': fieldsMissing,
        }),
        categoryIds: Joi.array().items(Joi.number()).required().messages({
            'any.required': fieldsMissing,
        }),
    });

    const { error, value } = schemaPost.validate(body);
    if (error) return { error: { code: 400, message: error.details[0].message } };
 
    return value;
};

const validateToUpdate = (body) => {
    const schemaPost = Joi.object({
        title: Joi.string().required().messages({
            'string.empty': fieldsMissing,
        }),
        content: Joi.string().required().messages({
            'string.empty': fieldsMissing,
        }),
    });

    const { error, value } = schemaPost.validate(body);
    if (error) return { error: { code: 400, message: error.details[0].message } };
 
    return value;
};

module.exports = { schemaLogin, validateUser, validateCategory, validatePost, validateToUpdate };
