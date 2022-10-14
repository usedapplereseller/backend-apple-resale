"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { as: "buyer", foreignKey: "buyer_id" });
      this.belongsTo(models.user, { as: "seller", foreignKey: "seller_id" });
      this.hasMany(models.photo, { foreignKey: "listing_id" });
      this.belongsTo(models.product, { foreignKey: "product_id" });
      this.belongsTo(models.condition, { foreignKey: "condition_id" });
    }
  }
  Listing.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
      },
      condition_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "conditions",
          key: "id",
        },
      },

      buyer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      seller_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "listing",
      underscored: true,
    }
  );
  return Listing;
};
