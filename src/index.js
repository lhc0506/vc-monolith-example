/*
 *
 * Monolith Server
 *
 * Monolith project contains everything it needs.
 * React, React Router, Server Endpoints, etc
 *
 * 1. Navigate to /react1
 * 2. Navigate to /react2
 * 3. Click "Home" & "About", "Increase" button.
 * 4. Navigate to /react1
 * 5. Navigate back to /react2
 *
 * [Q] What happened to the count? Why?
 * [Q] Do we have any CORS issues? Why?
 *
 */

const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.json());

const apiRouter = require("./router");

app.get("/", (req, res) => {
  res.redirect("/react1");
});

app.get("/react1", (req, res) => {
  res.render("react1");
});

app.get("/react2", (req, res) => {
  res.render("react2");
});

app.use("/api", apiRouter);

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
}

app.use(errorHandler);

app.listen(4000, () => {
  console.log("Listening");
});
