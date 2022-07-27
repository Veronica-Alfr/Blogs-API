const model = require('../models');

const create = async ({ title, content, categoryIds }, userId) => {
    const category = await model.Category.findAndCountAll({ where: { id: categoryIds } });

    if (categoryIds.length !== category.count) {
        const e = new Error('"categoryIds" not found');
        e.name = 'UnauthorizedError';
        throw e;
    }

    const blogPost = await model.BlogPost.create({ title, content, userId });

    const postCategoryContent = categoryIds
    .map((id) => ({ postId: blogPost.dataValues.id, categoryId: id }));

    await model.PostCategory.bulkCreate(postCategoryContent);

    return blogPost;
};

const getAll = async () => {
    const allPosts = await model.BlogPost
    .findAll(
        { include: 
    [
        { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: model.Category, as: 'categories', through: { attributes: [] } },
    ] },
    );

    return allPosts;
};

const getById = async (id) => {
    const postUnique = await model.BlogPost.findByPk(
    id,
        { include: 
    [
        { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: model.Category, as: 'categories', through: { attributes: [] } },
    ] },
    );

    return postUnique;
};

const update = async (id, { title, content }, userId) => {
    const idUser = await model.BlogPost.findByPk(id);
    
    if (userId !== idUser.dataValues.userId) {
        const e = new Error('Unauthorized user');
        e.name = 'UnauthorizedUser';
        throw e;
    }

    await model.BlogPost.update({ title, content }, { where: { id } });

    return getById(id);
};

const remove = async (id, userId) => {
    const post = await model.BlogPost.findByPk(id);

    if (!post) {
        const e = new Error('Post does not exist');
        e.name = 'NotFoundError';
        throw e;
    }
    
    if (userId !== post.dataValues.userId) {
        const e = new Error('Unauthorized user');
        e.name = 'UnauthorizedUser';
        throw e;
    }

    const postRemoved = await model.BlogPost.destroy({ where: { id } });
    return postRemoved;
};

module.exports = { create, getAll, getById, update, remove };
