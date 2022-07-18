const model = require('../models');

const create = async ({ name }) => {
    const category = model.Category.create({ name });
    return category;
};

const getAll = async () => {
    const categories = model.Category.findAll();
    return categories;
};

module.exports = { create, getAll };
