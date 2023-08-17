const express = require("express");
const bodyParser = require("body-parser");

const config = require("./configs/config.json");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.listen(config.app.port, () => {
  console.log(`Server is listening on ${config.app.port}`);
});
