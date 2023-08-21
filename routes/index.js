let { Router } = require("express");
Router = new Router();

const homePageController = require("../controllers/homePageController");
Router.get("/", homePageController.get);

const loginController = require("../controllers/loginController");
Router.get("/login", loginController.get);

const registerController = require("../controllers/registerController");
Router.get("/register", registerController.get);

module.exports = Router;
