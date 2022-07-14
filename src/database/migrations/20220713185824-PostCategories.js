'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('PostCategories', { 
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'post_id',
      references: {
        model: 'blogPosts',
        key: 'id',
      },
      primaryKey: true,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'category_id',
      references: {
        model: 'categories',
        key: 'id',
      },
      primaryKey: true,
    }
   });
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('PostCategories');
}};
