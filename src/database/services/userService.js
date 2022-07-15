const db = require('../models');

const create = async ({ displayName, email, password, image }) => {
    const user = await db.User.create({ displayName, email, password, image });
    return user;
};

module.exports = { create };
