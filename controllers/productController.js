const get = (req, res) => {
  res.render("singleProduct", {
    user: req.user,
    flash: req.flash(),
  });
};

module.exports = {
  get,
};
