//jshint esversion: 6
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

module.exports = {
  getRequest: getRequest

};

function getRequest(request, response){
  //////RESPONSE readFile here
const pathName = querystring.unescape(request.url);
// check if file exists, (fs function)
  fs.stat('./public' + pathName, (err, stats) => {
    if(err){
      console.log('Error');
    }
    if (stats.isFile()) {//checks - does the file exist? ->returns truthy
      // if yes:readFile
      fs.readFile('./public' + pathName, (err, data) => {
      // if not:404
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
    }else{
      fs.writeFile('./public/' + pathName + '.html', data, (err) => {
        if (err) throw err;
        console.log('New File Saved');
        });
    }
  });
}
//   fs.readFile('./public' + pathName, (err, data) => {
//      // if yes:readFile/if not:404
//     //create file for favico!
//     if(err){
//       response.writeHead(404, {
//         'Content-Type': 'application/json',
//         'success' : true
//       });
//       response.write('Page Not Found');
//       response.end();
//     }else{
//       response.writeHead(200);
//       response.write(data);
//       response.end();
//     }
//   });
// }
//create file for favico!