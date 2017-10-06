//jshint esversion: 6

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const handlers = require('./handlers');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';


const server = http.createServer((request, response) => {
  console.log('Client Connected');
  server.on('data', (data) => {
////REQUEST
  switch(request.method){
    case 'GET':
      //process GET request
      handlers.getRequest(request, response);
      break;
    case 'POST':
      //process POST request
      handlers.getRequest(request, response);
      break;
    case 'PUT':
      //process PUT requests
      handlers.getRequest(request, response);
      break;
    default:
      console.log('Error Occurred');
    }
  });
});

server.on('end', ()=> {
  console.log('Client Disconnected');
});

server.listen(PORT, HOST, () => {
  console.log('SERVER BCAST FROM ' + HOST + PORT);
});
server.on('error', (err) => {
  throw err;
});