const db = require("../../configs/mtaDB");
const { DataTypes } = require("sequelize");

const Character = db.define(
  "characters",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    account: {
      type: DataTypes.INTEGER,
    },

    charactername: {
      type: DataTypes.TEXT,
    },

    health: {
      type: DataTypes.FLOAT,
    },

    armor: {
      type: DataTypes.FLOAT,
    },

    skin: {
      type: DataTypes.INTEGER,
    },

    money: {
      type: DataTypes.BIGINT,
    },

    bankmoney: {
      type: DataTypes.BIGINT,
    },

    hoursplayed: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Character;
