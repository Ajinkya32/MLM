const express = require("express");
const app = express();
const session = require("express-session"); //For Express Session
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const path = require("path");

require("./schemas/memberSchema");
require("./schemas/incentiveSchema");
require("./schemas/referenceSchema");

//middleware for cookies
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

// Config
const public = path.resolve(__dirname, "public");
app.use(express.static(public));

require("dotenv").config({ path: "./config/config.env" });

const sessionRoutes = require("./routes/sessionRoutes");
const adminRoutes = require("./routes/adminRoutes");
const referenceRoute = require("./routes/referenceRoutes");
const analyticsRoute = require("./routes/analyticsRoutes");
const rewardsRoute = require("./routes/rewardsRoutes");

app.use("/api/session", sessionRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reference", referenceRoute);
app.use("/api/analytics", analyticsRoute);
app.use("/api/rewards", rewardsRoute);
app.use("/public", express.static(path.join(__dirname, "public")));
//Routes Section End--------------------------

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
