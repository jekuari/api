const express = require('express');
const app = express();
const http = require('http');
const https = require('https');


app.route('/')
      .get((req, res) => {
         res.send('Hello World!');
      });

http.createServer(app).listen(80);
https.createServer(app).listen(443);