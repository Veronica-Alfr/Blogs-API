const createPostCategoriesModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
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
      tableName: 'postCategory', // buscar remover o nome caso dê erro na 12
      timestamps: false
    });

    PostCategory.associate = (model) => {
      model.BlogPost.belongsToMany(model.Category, { 
        as: 'postsToCategories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      model.Category.belongsToMany(model.BlogPost, {
        as: 'categoriesToPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
   };

    return PostCategory;
  };
  
module.exports = createPostCategoriesModel;
