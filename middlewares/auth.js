const isUserLoggedIn = (req, res, next) => {
  if (!req.user) {
    req.flash("warning", "ابتدا به حساب کاربری خود وارد شوید");
    req.session.redirectURL = req.url;
    res.redirect("/login");
    return;
  }

  next();
};

const isUserNotLoggedIn = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
    return;
  }

  next();
};

const isUserAdmin = (req, res, next) => {
  const accessedRanks = ["admin", "leadAdmin", "owner", "developer"];

  if (!accessedRanks.includes(req.user.userRank)) return res.redirect("/");

  next();
};

const isUserDeveloper = (req, res, next) => {
  const accessedRanks = ["developer"];

  if (!accessedRanks.includes(req.user.userRank)) return res.redirect("/");

  next();
};

const isUserOwner = (req, res, next) => {
  const accessedRanks = ["owner", "developer"];

  if (!accessedRanks.includes(req.user.userRank)) return res.redirect("/");

  next();
};

const isUserSupporter = (req, res, next) => {
  const accessedRanks = [
    "supporter",
    "admin",
    "leadAdmin",
    "owner",
    "developer",
  ];

  if (!accessedRanks.includes(req.user.userRank)) return res.redirect("/");

  next();
};

const isUserLeadAdmin = (req, res, next) => {
  const accessedRanks = ["leadAdmin", "owner", "developer"];

  if (!accessedRanks.includes(req.user.userRank)) return res.redirect("/");

  next();
};

module.exports = {
  isUserLoggedIn,
  isUserNotLoggedIn,
  isUserAdmin,
  isUserDeveloper,
  isUserOwner,
  isUserSupporter,
  isUserLeadAdmin,
};
