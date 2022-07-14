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
      tableName: 'postCategory',
      timestamps: false
    });

    PostCategory.associate = (model) => {
      model.BlogPost.belongsToMany(model.Category, { 
        as: 'blogPosts',
        through: PostCategory,
        foreignKey: 'blogPostId',
        otherKey: 'categoryId',
      });
      model.Category.belongsToMany(model.BlogPosts, { 
        as: 'blogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'blogPostId',
      });
   };

    return PostCategory;
  };
  
module.exports = createPostCategoriesModel;
