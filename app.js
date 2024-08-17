require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const flash = require("connect-flash");
const expressSession = require("express-session");

// Requiring Routes
const indexRoute = require("./routes/index-route");
const usersRoute = require("./routes/users-route");
const productsRoute = require("./routes/products-route");
const ownerRoute = require("./routes/owner-route");

// Database Connection
require("./config/mongoose-connection");

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);

app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRoute);
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/owner", ownerRoute);

app.listen(9000);
