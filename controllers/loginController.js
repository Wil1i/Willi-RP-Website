const get = (req, res) => {
  res.render("login", {
    user: req.user,
    flash: req.flash(),
  });
};

module.exports = {
  get,
};
