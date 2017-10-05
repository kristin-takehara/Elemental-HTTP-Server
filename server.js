//jshint esversion: 6

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';


const server = http.createServer((request, response) => {
  console.log('Client Connected');
  server.on('end', ()=> {
  console.log('Client Disconnected');
});
//////DO WORK HERE
  const pathName = querystring.unescape(request.url);
////REQUEST




////RESPONSE
//check if file exists, (fs function)
  fs.readFile('./public' + pathName, (err, data) => {
     // if yes:readFile/if not:404
    //create file for favico!
    if(err){
      response.writeHead(404, {
        'Content-Type': 'application/json',
        'success' : true
      });
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