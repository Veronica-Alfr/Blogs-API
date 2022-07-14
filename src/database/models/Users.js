const sequelize = require("sequelize");

const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'user',
    underscored: true,
  });

User.associate = (db) => {
  User.hasMany(db.BlogPosts, { as: 'blogPosts', foreignKey: 'userId' });
}
  return User;
};

module.exports = createUser;
