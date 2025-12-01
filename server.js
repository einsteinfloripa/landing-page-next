// server.js
const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Usando os nomes exatos dos seus certificados
const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, './.certs/localhost+2-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, './.certs/localhost+2.pem')),
};

const port = 3000;

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Servidor HTTPS pronto em https://localhost:${port}`);
  });
});