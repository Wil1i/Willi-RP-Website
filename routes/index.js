let { Router } = require("express");
const { isUserNotLoggedIn, isUserLoggedIn } = require("../middlewares/auth");
Router = new Router();

const homePageController = require("../controllers/homePageController");
Router.get("/", homePageController.get);

const loginController = require("../controllers/loginController");
Router.get("/login", isUserNotLoggedIn, loginController.get);
Router.post(
  "/login",
  isUserNotLoggedIn,
  loginController.post,
  loginController.func
);

const registerController = require("../controllers/registerController");
Router.get("/register", isUserNotLoggedIn, registerController.get);
Router.post("/register", isUserNotLoggedIn, registerController.post);

const shopController = require("../controllers/shopController");
Router.get("/shop", shopController.get);

const productController = require("../controllers/productController");
Router.get("/product/:id", productController.get);

const blogsController = require("../controllers/blogsController");
Router.get("/blogs", blogsController.get);

const singleBlogController = require("../controllers/singleBlogController");
Router.get("/blog/:id", singleBlogController.get);

const aboutUsController = require("../controllers/aboutUsController");
Router.get("/about-us", aboutUsController.get);

const rulesController = require("../controllers/rulesController");
Router.get("/rules", rulesController.get);

const dashboardController = require("../controllers/dashboardController");
Router.get("/dashboard", isUserLoggedIn, dashboardController.get);

const logoutController = require("../controllers/logoutController");
Router.get("/logout", isUserLoggedIn, logoutController.get);

const supportController = require("../controllers/supportController")
Router.get("/dashboard/support", isUserLoggedIn, supportController.get)
Router.post("/dashboard/support", isUserLoggedIn, supportController.post)

const singleTicketController = require("../controllers/singleTicketController")
Router.get("/dashboard/support/:id", isUserLoggedIn, singleTicketController.get)
Router.post("/dashboard/support/:id", isUserLoggedIn, singleTicketController.post)

module.exports = Router;
