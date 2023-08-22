const get = (req, res) => {
  res.render("rules", {
    flash: req.flash(),
    user: req.user,
  });
};

module.exports = {
  get,
};
