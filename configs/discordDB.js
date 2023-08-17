const sequelize = require("sequelize");
const config = require("./config.json");

const db = new sequelize(
  config.discordDB.name,
  config.discordDB.username,
  config.discordDB.password,
  {
    host: config.discordDB.host,
    dialect: config.discordDB.dialect,
  }
);

try {
  db.authenticate();
  console.log(`Connected to DB ${config.discordDB.name}`);
} catch (error) {
  console.log(`Can't connect to db ${config.discordDB.name}`, error);
}

module.exports = db;
