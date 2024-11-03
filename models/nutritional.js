"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Nutritional extends Model {
    static associate(models) {
      // Nutritional belongs to Product with foreignKey 'productId'
      Nutritional.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "Product",
      });
    }
  }

  Nutritional.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      carbohydrate: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      protein: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      fat: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Nutritional",
      tableName: "nutritionals",
      timestamps: true,
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
    }
  );

  return Nutritional;
};
