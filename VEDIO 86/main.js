// import {a} from "./mymodules.js"
// console.log(a)


// import obj from "./mymodules.js"
// console.log(obj)


// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives here
  
//   });
const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)









// // server.mjs
// import { createServer } from 'node:http';
// const fs = require("fs")


// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('<h1>Hello World!</h1>');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs` 
