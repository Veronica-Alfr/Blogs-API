const sequelize = require("sequelize");

const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'user',
    underscored: true,
  });

User.associate = (model) => {
  User.hasMany(model.BlogPost, { as: 'blogPosts', foreignKey: 'userId' });
}
  return User;
};

module.exports = createUser;
