const model = require('../models');

const create = async ({ displayName, email, password, image }) => {
    const userExisted = await model.User.findOne({
        where: { email },
    });

    if (userExisted) {
        const e = new Error('User already registered');
        e.name = 'UserExistError';
        throw e;
    }

    const user = await model.User.create({ displayName, email, password, image });

    return user;
};

const getAll = async () => {
    const allUsers = await model.User.findAll({ attributes: { exclude: ['password'] } });
    return allUsers;
};

const getById = async (id) => {
    const user = await model.User.findByPk(id, { attributes: { exclude: ['password'] } });
    return user;
};

const remove = async (userId) => {
    const userRemoved = await model.User.destroy({ where: { id: userId } });
    return userRemoved;
};

module.exports = { create, getAll, getById, remove };
