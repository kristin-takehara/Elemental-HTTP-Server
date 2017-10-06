//jshint esversion: 6

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';


const client = new http.Socket();
server.connect(PORT, () => {
  console.log('Connected to Server');

});

client.on('data', (chunk) => {
  console.log('Data Retrieved');

});