const model = require('../models');
const { schemaUser } = require('../middlewares/schemas');

const validateBodyUser = ({ displayName, email, password, image }) => {
    const { error, value } = schemaUser.validate({ displayName, email, password, image });
 
    if (error) throw error;
 
    return value;
};

const create = async ({ displayName, email, password, image }) => {
    const userExisted = await model.User.findOne({
        where: { email },
    });

    if (userExisted) {
        const e = new Error('User already registered');
        e.name = 'UserExistisError';
        throw e;
    }

    const user = await model.User.create({ displayName, email, password, image });

    return user;
};

module.exports = { create, validateBodyUser };
