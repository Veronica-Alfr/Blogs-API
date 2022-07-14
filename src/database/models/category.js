const createCategoriesModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    }, {
      tableName: 'category',
      underscored: true,
    });
    
   return Category;
}
  
module.exports = createCategoriesModel;