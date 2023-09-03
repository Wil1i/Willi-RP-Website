const Ticket = require("../models/website/Ticket")
const TicketMessage = require("../models/website/TicketMessage")
const Account = require("../models/core/Account");

const get = async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id, {include : ['messages']})
  const mta = (await Account.findByPk(req.user.mtaId)) || false;

  if(!ticket) res.redirect("/dashboard/support")

  res.render("dashboard-singleTicket", {
    user : req.user,
    flash : req.flash(),
    ticket,
    mta
  })
}

const post = async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id)

  if(!ticket || ticket.user != req.user.id || ticket.status == "بسته شده") res.redirect("/dashboard/support")

  if(req.query.action == "close") {

    await ticket.update({status : "بسته شده"})

    res.redirect("/dashboard/support")

  }else if(req.query.action == "message"){

    await TicketMessage.create({
      text : req.body.text,
      sender : req.user.id,
      ticketId : req.params.id
    })

    res.redirect(`/dashboard/support/${req.params.id}`)

  }
}

module.exports = {
  get,
  post
}