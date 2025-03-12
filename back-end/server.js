const express = require("express");
const app = express();

// app.get("/",function(){})
//  OR
// app.get("/",()=>{})

function get1() {
  app.get("/", (req, res) => {
    res.send("Hello world form app !!!!");
  });

}

function get2() {
  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("homepage.ejs");
  });
 
}

function main() {
//   get1();
  get2()  
  
  app.listen(3000);
}

main();
