const db = require("../../configs/websiteDB")
const {DataTypes} = require("sequelize")

const TicketMessage = db.define("ticketmessages", {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },

  text : {
    type : DataTypes.TEXT
  },

  sender : {
    type : DataTypes.TEXT
  },

  ticketId : {
    type : DataTypes.INTEGER
  }
})

TicketMessage.sync()

module.exports = TicketMessage