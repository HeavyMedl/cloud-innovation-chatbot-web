// @ts-check
const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
// const request = require('request');
// const util = require('./util');

async function main() {
  // Azure App Service will set process.env.port for you,
  // but we use 3000 in development.
  const PORT = process.env.PORT || 5000;
  // Create the express routes
  const app = express();

  app.use(cookieParser());
  app.use(express.static('build'));

  // app.get('*', async (req, res) => {
  //   res.json({ hi: 'robert' });
  // });

  // Create the HTTP server.
  const server = http.createServer(app);
  server.listen(PORT, function() {
    console.log(`chatbot express.js listening on port ${PORT}`);
  });
}

main();
