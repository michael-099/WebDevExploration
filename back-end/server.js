const express = require("express");
const app = express();

// app.get("/",function(){})
//  OR
// app.get("/",()=>{})

function get() {
  app.get("/", (req, res) => {
    res.send("Hello world form app !!!!");
  });
}

function get_app() {
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.get("/", (req, res) => {
    res.render("homepage.ejs");
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });
}

function main() {
  get_app();
  app.listen(3000);
}

main();
