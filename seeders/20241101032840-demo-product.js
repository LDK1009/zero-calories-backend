"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log("Seeding data..."); // 추가
    await queryInterface.bulkInsert("products", [
      {
        name: "암바사 제로",
        link: "https://link.coupang.com/a/bYzTKz",
        src: "https://url.kr/v2jls5",
        major_category: "제로",
        middle_category: "음료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "닥터페퍼 제로",
        link: "https://link.coupang.com/a/bYzU3H",
        src: "https://url.kr/9stmgv",
        major_category: "제로",
        middle_category: "음료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "갈배 제로",
        link: "https://link.coupang.com/a/bYzWA9",
        src: "https://url.kr/7t2gs6",
        major_category: "제로",
        middle_category: "음료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "초록매실 제로",
        link: "https://link.coupang.com/a/bYzVvU",
        src: "https://url.kr/oy9t3h",
        major_category: "제로",
        middle_category: "음료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "코카콜라 제로",
        link: "https://link.coupang.com/a/bYzVXP",
        src: "https://url.kr/4w393s",
        major_category: "제로",
        middle_category: "음료",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
