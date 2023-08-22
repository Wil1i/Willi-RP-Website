const get = (req, res) => {
  res.render("aboutUs", {
    flash: req.flash(),
    user: req.user,
  });
};

module.exports = {
  get,
};
