let { Router } = require("express");
Router = new Router();

const homePageController = require("../controllers/homePageController");
Router.get("/", homePageController);

module.exports = Router;
