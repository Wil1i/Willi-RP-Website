const User = require("../models/website/User");
const { validationResult } = require("express-validator");
const password = require("../utils/password");

const get = (req, res) => {
  res.render("register", {
    flash: req.flash(),
    user: req.user,
  });
};

const post = async (req, res) => {
  let isUserRegistered = true;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    isUserRegistered = false;
    const errorsArray = errors.array();
    req.flash("danger", `${errorsArray.param} ${errorsArray.msg}`);
  }

  const isUsernameFoundInDB = await User.findOne({
    where: { username: req.body.username },
  });

  const isNumberFoundInDB = await User.findOne({
    where: { number: req.body.number },
  });

  if (req.body.password !== req.body.passwordRetype) {
    if (isUserRegistered) req.flash("error", "پسورد با تکرار آن مطابقت ندارد");
    isUserRegistered = false;
  }
  if (isUsernameFoundInDB) {
    if (isUserRegistered)
      req.flash("error", "نام کاربری قبلا استفاده شده است.");
    isUserRegistered = false;
  }
  if (isNumberFoundInDB) {
    if (isUserRegistered)
      req.flash("error", "شماره همراه قبلا استفاده شده است.");
    isUserRegistered = false;
  }

  if (isUserRegistered) {
    await User.create({
      username: req.body.username,
      password: await password.encrypt(req.body.password),
      number: req.body.number,
      userRank: "member",
    });

    res.redirect("/login");
  } else res.redirect("/register");
};

module.exports = {
  get,
  post,
};
