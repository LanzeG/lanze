const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/api/saveKey' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const keyObject = JSON.parse(body);
      const key = keyObject.key;
      fs.readFile('keys.json', (err, data) => {
        if (err && err.code !== 'ENOENT') {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal server error' }));
          return;
        }
        let keys = [];
        if (data) {
          keys = JSON.parse(data);
        }
        keys.push(key);
        fs.writeFile('keys.json', JSON.stringify(keys), err => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
            return;
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Key saved successfully' }));
        });
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
