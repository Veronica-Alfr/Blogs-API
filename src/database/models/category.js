const createCategoriesModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    }, {
      tableName: 'category',
      underscored: true,
    });
    
   return Category;
}
  
module.exports = createCategoriesModel;