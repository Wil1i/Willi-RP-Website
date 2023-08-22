const get = (req, res) => {
  res.render("singleBlog", {
    user: req.user,
    flash: req.flash(),
  });
};

module.exports = {
  get,
};
