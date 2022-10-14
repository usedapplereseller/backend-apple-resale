"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Jason",
        last_name: "Tan",
        phone_num: "98877889",
        email: "jason.tan@gmail.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("listings", [
      {
        title: "iPhone 12",
        price: 699,
        description: "Used for 1 year and upgrading",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "iPhone 13",
        price: 499,
        description: "Bought for my nephew but he prefers Samsung.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "iPhone 6S",
        price: 49,
        description: "Prefer a better phone.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listings", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
