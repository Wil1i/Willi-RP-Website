const sequelize = require("sequelize");
const config = require("./config.json");

const db = new sequelize(
  config.coreDB.name,
  config.coreDB.username,
  config.coreDB.password,
  {
    host: config.coreDB.host,
    dialect: config.coreDB.dialect,
  }
);

try {
  db.authenticate();
  console.log(`Connected to DB ${config.coreDB.name}`);
} catch (error) {
  console.log(`Can't connect to db ${config.coreDB.name}`, error);
}

module.exports = db;
