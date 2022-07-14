const createModelPosts = (sequelize, DataTypes) => {
    const Post = sequelize.define('BlogPosts', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
      }
    }, {
      tableName: 'blogPosts',
      underscored: true,
    });
  
Post.associate = (db) => {
   Post.belongsTo(db.User, { as: 'user', foreignKey: 'userId' })
};
   return Post;
}
  
module.exports = createModelPosts;
