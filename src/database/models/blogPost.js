const createModelPosts = (sequelize, DataTypes) => {
    const Post = sequelize.define('BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
    }, {
      tableName: 'blogPosts',
      underscored: true,
    });
  
Post.associate = (db) => {
   Post.belongsTo(db.User, { as: 'users', foreignKey: 'userId' })
};
   return Post;
}
  
module.exports = createModelPosts;
