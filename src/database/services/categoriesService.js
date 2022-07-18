const model = require('../models');

const create = async ({ name }) => {
    const category = model.Category.create({ name });
    return category;
};

module.exports = { create };
