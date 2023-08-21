const get = (req, res) => {
  res.render("register", {
    flash: req.flash(),
    user: req.user,
  });
};

module.exports = {
  get,
};
