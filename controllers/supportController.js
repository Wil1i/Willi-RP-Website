const Ticket = require("../models/website/Ticket")
const Account = require("../models/core/Account");

const get = async (req, res) => {
  const userTickets = await Ticket.findAll({where : {user : req.user.id}})
  const mta = (await Account.findByPk(req.user.mtaId)) || false;

  res.render("dashboard-support", {
    flash : req.flash(),
    user : req.user,
    mta,
    tickets : userTickets
  })
}

module.exports = {
  get
}