"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        id: 1,
        product: "Macbook",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        product: "iPhone",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        product: "iPad",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        product: "Apple Watch",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
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
    await queryInterface.bulkInsert("conditions", [
      {
        id: 1,
        condition: "Brand new",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        condition: "Like new",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        condition: "Lightly used",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        condition: "Well used",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        condition: "Heavily used",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("listings", [
      {
        title: "iPhone 12",
        price: 699,
        description: "Used for 1 year and upgrading",
        product_id: 2,
        condition_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "iPhone 13",
        price: 499,
        description: "Bought for my nephew but he prefers Samsung.",
        product_id: 2,
        condition_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "iPhone 6S",
        price: 49,
        description: "Prefer a better phone.",
        product_id: 2,
        condition_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listings", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("conditions", null, {});
  },
};
