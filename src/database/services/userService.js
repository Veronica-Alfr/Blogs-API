const db = require('../models');
const { schemaUser } = require('../middlewares/schemas');

const validateBodyUser = ({ displayName, email, password, image }) => {
    const { error, value } = schemaUser.validate({ displayName, email, password, image });
 
    if (error) throw error;
 
    return value;
};

const create = async ({ displayName, email, password, image }) => {
    const user = await db.User.create({ displayName, email, password, image });
    return user;
};

module.exports = { create, validateBodyUser };
