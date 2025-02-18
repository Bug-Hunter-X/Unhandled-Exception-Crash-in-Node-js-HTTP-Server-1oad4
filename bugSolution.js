const http = require('http');

const requestListener = function (req, res) {
  try {
    //Simulate an error
    // const a = 1/0; 
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Request handling failed:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(8080);
console.log('Server is running at http://localhost:8080/');