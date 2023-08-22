const passport = require("passport");

const get = (req, res) => {
  res.render("login", {
    user: req.user,
    flash: req.flash(),
  });
};

const post = passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true,
  session: true,
});

const func = (req, res) => {
  var redirectTo = req.session.redirectURL || "/";
  res.redirect(redirectTo);
};

module.exports = {
  get,
  post,
  func,
};
