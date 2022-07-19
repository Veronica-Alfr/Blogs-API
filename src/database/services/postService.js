const model = require('../models');

const create = async ({ title, content, categoryIds }, userId) => {
    const category = await model.Category
    .findAndCountAll({ where: { id: categoryIds } });

    if (categoryIds.length !== category.count) {
        const e = new Error('"categoryIds" not found');
        e.name = 'UnauthorizedError';
        throw e;
    }

    const blogPost = await model.BlogPost.create({ title, content, userId });

    const categoryId = categoryIds
    .map((id) => ({ postId: blogPost.dataValues.id, categoryId: id }));

    await model.PostCategory.bulkCreate(categoryId);

    return blogPost;
};

module.exports = { create };
