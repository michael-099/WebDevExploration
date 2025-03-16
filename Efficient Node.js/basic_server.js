// Node’s version of a “Hello World”


const { createServer } = require("node:http");
// require in Node.js is used to import modules, libraries, or dependencies,
//  just like how you import packages in other languages.

// 🔹 Comparison with Other Languages:
//          Python → import os
//          Java → import java.util.Scanner;
//          C++ → #include <iostream>
// The require function is part of Node’s original dependency
// management method. It allows a module (like server.js) to use the features
// of another module (like node:http ).

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running...");
});
