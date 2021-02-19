const express = require('express');
const server = require('http');
const httpProxy = require('http-proxy');

const app = express();
const appServer = server.createServer(app);
const appProxy = httpProxy.createProxyServer(app);

appProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy down :(');
});

const fronEndHost = process.env.FRONT_END_HOST || 'http://localhost:3000';
app.all('/*', (req, res) => {
  appProxy.web(req, res, { target: fronEndHost });
});

appServer.listen(80);
console.log('Gateway started');