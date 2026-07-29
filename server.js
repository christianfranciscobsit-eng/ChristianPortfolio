const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5501;
const rootDir = process.cwd();

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

function getContentType(filePath) {
  return mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function sanitizeUrl(url) {
  const sanitized = url.split('?')[0].split('#')[0];
  return path.normalize(decodeURIComponent(sanitized)).replace(/^\.+/, '');
}

const server = http.createServer((req, res) => {
  const sanitizedPath = sanitizeUrl(req.url === '/' ? '/index.html' : req.url);
  const filePath = path.join(rootDir, sanitizedPath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }

    if (stats.isDirectory()) {
      res.writeHead(301, { Location: '/index.html' });
      res.end();
      return;
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
        return;
      }

      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      res.end(data);
    });
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Local server running at http://127.0.0.1:${port}/`);
});
