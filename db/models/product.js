"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.listing, { foreignKey: "product_id" });
    }
  }
  Product.init(
    {
      product: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product",
      underscored: true,
    }
  );
  return Product;
};
