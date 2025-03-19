const express = require("express");
const app = express();

function get() {
  app.get("/", (req, res) => {
    res.send("Hello world from app !!!!");
  });
}

function get_app() {
  app.set("view engine", "ejs");
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("public"));

  app.use(function (req, res, next) {
    res.locals.errors = [];
    next();
  });

  app.get("/", (req, res) => {
    res.render("homepage");
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.post("/register", (req, res) => {
    const errors = [];

    // Validate username and password
    if (typeof req.body.username !== "string") req.body.username = "";
    if (typeof req.body.password !== "string") req.body.password = "";

    req.body.username = req.body.username.trim();

    if (!req.body.username.length) errors.push("You must provide a username.");
    if (req.body.username && req.body.username.length < 3)
      errors.push("Username must be greater than 3 characters.");
    if (req.body.password && req.body.password.length < 8)
      errors.push("password must be greater than 8 characters.");
    if (req.body.username && !req.body.username.match(/^[a-zA-Z0-9]+$/))
      errors.push("Username can only contain letters and numbers.");

    if (errors.length) {
      return res.render("login", { errors });
    } else {
      res.send("Thank you for filling out the form.");
    }
  });
}

function main() {
  get_app();
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

main();
