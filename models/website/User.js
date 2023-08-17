const db = require("../../configs/websiteDB");
const { DataTypes } = require("sequelize");

const User = require("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  username: {
    type: DataTypes.TEXT,
  },

  password: {
    type: DataTypes.TEXT,
  },

  userRank: {
    type: DataTypes.TEXT,
    defaultValue: "user",
  },

  discordId: {
    type: DataTypes.TEXT,
  },

  mtaAccount: {
    type: DataTypes.TEXT,
  },

  profile: {
    type: DataTypes.TEXT,
  },
});

User.sync();

module.exports = User;
