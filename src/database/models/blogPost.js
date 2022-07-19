const createModelPosts = (sequelize, DataTypes) => {
    const Post = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      timestamps: false
    });
  
Post.associate = (model) => {
   Post.belongsTo(model.User, { as: 'users', foreignKey: 'userId' })
};
   return Post;
}
  
module.exports = createModelPosts;
