const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const cookies = require("cookie-parser");
const session = require("express-session");
const fileUpload = require("express-fileupload");
const passport = require("passport");

const config = require("./configs/config.json");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(flash());
app.use(cookies());
app.use(fileUpload());
app.use(session({ secret: config.app.secret }));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(passport.initialize());
app.use(passport.session());

require("./utils/passport");

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.listen(config.app.port, () => {
  console.log(`Server is listening on ${config.app.port}`);
});
