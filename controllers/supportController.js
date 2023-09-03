const Ticket = require("../models/website/Ticket")
const Account = require("../models/core/Account");

const get = async (req, res) => {
  const userTickets = await Ticket.findAll({where : {user : req.user.id}, order : [['id', 'DESC']]})
  const mta = (await Account.findByPk(req.user.mtaId)) || false;

  res.render("dashboard-support", {
    flash : req.flash(),
    user : req.user,
    mta,
    tickets : userTickets
  })
}

const post = async (req, res) => {
  await Ticket.create({
    subject : req.body.subject,
    user : req.user.id,
    status : "خوانده نشده"
  }).then(ticket => {
    res.redirect(`/dashboard/support/${ticket.id}`)
  })
}

module.exports = {
  get,
  post
}