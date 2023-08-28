const Account = require("../models/core/Account");
const Character = require("../models/mta/Character");

const get = async (req, res) => {
  const mta = (await Account.findByPk(req.user.mtaId)) || false;
  const characters =
    (await Character.findAll({ where: { account: mta?.id } })) || false;

  let totals = {
    money: 0,
    bankMoney: 0,
  };

  if (characters && characters[0]) {
    characters.forEach((character, index) => {
      totals.money = totals.money + parseInt(character.money);
      totals.bankMoney = totals.bankMoney + parseInt(character.bankmoney);
      if (!characters[index + 1])
        res.render("dashboard", {
          user: req.user,
          mta,
          characters,
          totals,
          flash: req.flash(),
        });
    });
  }
};

module.exports = {
  get,
};
