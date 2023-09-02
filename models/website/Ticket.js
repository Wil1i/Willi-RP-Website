const db = require("../../configs/websiteDB")
const {DataTypes} = require("sequelize")

const Ticket = db.define("tickets", {
  id : {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true
  },

  supporter : {
      type : DataTypes.INTEGER,
      defaultValue : null
  },

  user : {
    type : DataTypes.INTEGER,
  },

  subject : {
    type : DataTypes.TEXT
  },

  status : {
    type : DataTypes.TEXT
  }
})

Ticket.sync()

module.exports = Ticket