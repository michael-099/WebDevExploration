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

// node:http is part of Node itself.
//  You don’t need to install anything to use it,
//  but you do need to require (or import) it.

const server = createServer((req, res) => {
  console.log(`Requested URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  console.log(`Headers:`, req.headers);

  console.log(`res URL: ${res.url}`);
  console.log(`res Method: ${res.method}`);
  console.log(`Headers:`, res.headers);

  // Request Listener (Callback Function)
  // createServer takes a listener function (also called RequestListener).
  // the listener function is anonymous—it doesn’t have an explicit name.
  // This function runs every time an HTTP request is received.

  // Request (req) and Response (res) Objects
  // req (Request object): Contains details about the incoming request (e.g., URL, headers).
  // res (Response object): Used to send a response back to the client.

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");

});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running...");
});
