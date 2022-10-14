"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("photos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      photos_link: {
        type: Sequelize.STRING,
      },
      listing_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("photos");
  },
};
