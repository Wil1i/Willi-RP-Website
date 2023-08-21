let { Router } = require("express");
Router = new Router();

const homePageController = require("../controllers/homePageController");
Router.get("/", homePageController.get);

const loginController = require("../controllers/loginController");
Router.get("/login", loginController.get);

module.exports = Router;
