"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("conditions", null, {});
  },
};
