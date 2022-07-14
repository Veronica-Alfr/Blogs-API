const createModelPosts = (sequelize, DataTypes) => {
    const Post = sequelize.define('BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      // tableName: 'blogPosts',
      underscored: true,
    });
  
Post.associate = (model) => {
   Post.belongsTo(model.User, { as: 'users', foreignKey: 'userId' })
};
   return Post;
}
  
module.exports = createModelPosts;
