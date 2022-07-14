const createPostCategoriesModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategories', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    }, {
      underscored: true,
      tableName: 'postCategories',
      timestamps: false
    });

    return PostCategory;
  };
  
module.exports = createPostCategoriesModel;
