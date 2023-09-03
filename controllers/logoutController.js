const get = (req, res) => {
  delete req.user;
  res.redirect("/");
};

module.exports = {
  get,
};
