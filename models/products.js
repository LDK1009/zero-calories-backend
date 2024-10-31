'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    src: DataTypes.STRING,
    major_category: DataTypes.STRING,
    middle_category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
    tableName: 'products',
    timestamps: true,
  });
  return Products;
};