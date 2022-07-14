const createCategoriesModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Categories', {
      name: DataTypes.STRING,
    }, {
      tableName: 'categories',
      underscored: true,
    });
    
   return Category;
}
  
module.exports = createCategoriesModel;