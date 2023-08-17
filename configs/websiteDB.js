const sequelize = require("sequelize");
const config = require("./config.json");

const db = new sequelize(
  config.websiteDB.name,
  config.websiteDB.username,
  config.websiteDB.password,
  {
    host: config.websiteDB.host,
    dialect: config.websiteDB.dialect,
  }
);

try {
  db.authenticate();
  console.log(`Connected to DB ${config.websiteDB.name}`);
} catch (error) {
  console.log(`Can't connect to db ${config.websiteDB.name}`, error);
}

module.exports = db;
