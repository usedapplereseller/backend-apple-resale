"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      this.belongsTo(models.listing, { foreignKey: "listing_id" });
    }
  }
  Photo.init(
    {
      photos_link: DataTypes.STRING,
      listing_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "photo",
      underscored: true,
    }
  );
  return Photo;
};
