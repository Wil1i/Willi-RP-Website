const get = (req, res) => {
  res.render("shop", {
    flash: req.flash(),
    user: req.user,
  });
};

module.exports = {
  get,
};
