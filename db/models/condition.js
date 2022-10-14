"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Condition extends Model {
    static associate(models) {
      this.hasMany(models.listing, { foreignKey: "condition_id" });
    }
  }
  Condition.init(
    {
      condition: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "condition",
      underscored: true,
    }
  );
  return Condition;
};
