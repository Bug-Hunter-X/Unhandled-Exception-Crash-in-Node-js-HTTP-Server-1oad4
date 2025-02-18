const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running at http://localhost:8080/');
//The error is that the server doesn't handle errors properly, it will crash if there is an error during the request handling.  This is an uncommon bug as most developers handle errors using try...catch block or by using event listeners.