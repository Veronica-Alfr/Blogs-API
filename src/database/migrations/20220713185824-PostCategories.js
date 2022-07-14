'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('PostCategories', { 
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // field: 'postCategory_id',
      references: {
        model: 'blogPost',
        key: 'id',
      },
      primaryKey: true,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // field: 'category_id',
      references: {
        model: 'category',
        key: 'id',
      },
      primaryKey: true,
    }
   });
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('PostCategories');
}};
