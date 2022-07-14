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
        foreignKey: 'postCategory_id',
        otherKey: 'category_id',
      });
      model.Category.belongsToMany(model.BlogPosts, { 
        as: 'blogPosts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'postCategory_id',
      });
   };

    return PostCategory;
  };
  
module.exports = createPostCategoriesModel;
