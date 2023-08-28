const db = require("../../configs/coreDB");
const { DataTypes } = require("sequelize");

const Account = db.define(
  "accounts",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    username: {
      type: DataTypes.TEXT,
    },

    admin: {
      type: DataTypes.FLOAT,
    },

    supporter: {
      type: DataTypes.FLOAT,
    },

    vct: {
      type: DataTypes.FLOAT,
    },

    mapper: {
      type: DataTypes.FLOAT,
    },

    scripter: {
      type: DataTypes.FLOAT,
    },

    fmt: {
      type: DataTypes.FLOAT,
    },

    activated: {
      type: DataTypes.TINYINT,
    },

    discordOTP: {
      type: DataTypes.TEXT,
    },

    discordId: {
      type: DataTypes.TEXT,
    },

    webOTP: {
      type: DataTypes.TEXT,
    },

    webId: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Account;
