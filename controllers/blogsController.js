const get = (req, res) => {
  res.render("blogs", {
    flash: req.flash(),
    user: req.user,
  });
};

module.exports = {
  get,
};
