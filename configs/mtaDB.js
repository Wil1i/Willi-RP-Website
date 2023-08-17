const sequelize = require("sequelize");
const config = require("./config.json");

const db = new sequelize(
  config.mtaDB.name,
  config.mtaDB.username,
  config.mtaDB.password,
  {
    host: config.mtaDB.host,
    dialect: config.mtaDB.dialect,
  }
);

try {
  db.authenticate();
  console.log(`Connected to DB ${config.mtaDB.name}`);
} catch (error) {
  console.log(`Can't connect to db ${config.mtaDB.name}`, error);
}

module.exports = db;
