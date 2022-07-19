const model = require('../models');
// const userService = require('./userService');

const create = async ({ title, content, categoryIds }, { userId }) => {
    const categoryId = await model.Category
    .findAndCountAll({ where: { id: categoryIds } });

    if (categoryIds.length !== categoryId.count) {
        const e = new Error('"categoryIds" not found');
        e.name = 'UnauthorizedError';
        throw e;
    }
    // relacionar userId de BlogPost com id de User ?;
    // const user = await userService.getById();
    // const userId = user.data.id;

    // if (userId === categoryId.rows[].dataValues.id)

    // pegar o id do novo post e criar na CategoryPost de acordo com as categorias passadas;

    const postCategory = await model.BlogPost.create({ title, content, userId });

    console.log();
    return postCategory;
};
create({ categoryIds: [1, 2] });
// module.exports = { create };
