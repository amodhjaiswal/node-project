// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server and define request handling
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Handle different routes
  if (req.url === '/') {
    res.end('Hello World!\n');
  } else if (req.url === '/about') {
    res.end('About Us\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
