// Node’s version of a “Hello World” using ES Modules
import { createServer } from "node:http";
// import is used in ES6+ (ECMAScript) to bring in modules,
// similar to how require works in CommonJS.

// 🔹 Comparison with Other Languages:
//          Python → import os
//          Java → import java.util.Scanner;
//          C++ → #include <iostream>

// The import syntax is part of ES Modules,
// which is the modern way to handle dependencies in JavaScript.

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running...");
});
