const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.listen(3000, () => console.log('Listening on port 3000'));

/*

const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // 读取 index.html 文件
    fs.readFile('./static/index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Internal Server Error</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

