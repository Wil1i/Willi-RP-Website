let { Router } = require("express");
Router = new Router();

const homePageController = require("../controllers/homePageController");
Router.get("/", homePageController.get);

const loginController = require("../controllers/loginController");
Router.get("/login", loginController.get);

const registerController = require("../controllers/registerController");
Router.get("/register", registerController.get);

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

module.exports = Router;
