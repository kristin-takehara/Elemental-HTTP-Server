//jshint esversion: 6

const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';


const server = http.createServer((request, response) => {
  console.log('Client Connected');
  server.on('end', ()=> {
  console.log('Client Disconnected');
});
//////DO WORK HERE
  const pathName = url.parse(request.url).pathname;

  fs.readFile('./public' + pathName, (err, data) => {
    if(err){
      response.writeHead(404);
      response.write('Page Not Found');
      response.end();
    }else{
      response.writeHead(200);
      response.write(data);
      response.end();
    }
  });


});


server.listen(PORT, HOST, () => {
  console.log('SERVER BCAST FROM ' + HOST + PORT);
});
server.on('error', (err) => {
  throw err;
});