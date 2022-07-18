const model = require('../models');

const create = async ({ displayName, email, password, image }) => {
    const userExisted = await model.User.findOne({
        where: { email },
    });

    console.log(userExisted, 'usuario existe por email');

    if (userExisted) {
        const e = new Error('User already registered');
        e.name = 'UserExistError';
        throw e;
    }

    console.log(userExisted, 'usuario realmente existe');

    const user = await model.User.create({ displayName, email, password, image });

    return user;
};

module.exports = { create };
