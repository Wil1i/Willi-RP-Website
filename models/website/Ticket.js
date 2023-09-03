const db = require("../../configs/websiteDB")
const TicketMessage = require("./TicketMessage")
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

Ticket.hasMany(TicketMessage, { as: "messages" })
TicketMessage.belongsTo(Ticket, {
  foreginKey: "ticketId",
  as: "ticket"
})

module.exports = Ticket