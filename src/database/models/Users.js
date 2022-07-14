const sequelize = require("sequelize");

const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
  });

User.associate = (db) => {
  User.hasMany(db.BlogPosts, { as: 'posts', foreignKey: 'userId' });
}
  return User;
};

module.exports = createUser;
