const { validateCategory } = require('../middlewares/validation/schemas');
const categoryService = require('../services/categoriesService');

const create = async (req, res) => {
    const categoryCreate = validateCategory(req.body);

    if (!categoryCreate.error) {
        const category = await categoryService.create(categoryCreate);

        return res.status(201).json(category);
    }
        const e = new Error(categoryCreate.error.message);
        e.name = 'UnauthorizedError';
        throw e;
};

module.exports = { create };
