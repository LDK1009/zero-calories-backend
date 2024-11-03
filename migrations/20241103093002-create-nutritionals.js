"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("nutritionals", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "products", // 참조할 테이블 이름
          key: "id",
        },
        autoIncrement: true,
        allowNull: false,
      },
      carbohydrate: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      protein: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      fat: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("nutritionals");
  },
};
