const db = require("../../configs/websiteDB");
const { DataTypes } = require("sequelize");

const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  username: {
    type: DataTypes.TEXT,
  },

  number: {
    type: DataTypes.TEXT,
  },

  password: {
    type: DataTypes.TEXT,
  },

  userRank: {
    type: DataTypes.TEXT,
    defaultValue: "user",
  },

  mtaId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },

  profile: {
    type: DataTypes.TEXT,
    defaultValue: null,
  },
});

module.exports = User;
