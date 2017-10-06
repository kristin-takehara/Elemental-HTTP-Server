//jshint esversion: 6
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

module.exports = {
  getRequest: getRequest,
  postRequest: postRequest
};

function getRequest(request, response) {
const pathName = request.url;

let resource = './public';
  if(pathName === '/') {
    resource += '/index.html';
  }else{
    resource += pathName;
  }
//if the url request does not exist, throw error
//if the url request has a resource that exists
//readFile
//return the file to the client

  fs.readFile(resource, (err, data) => {
    if (err){
      response.writeHead(404, {
        'Content-Type': 'application/json',
        'success': false
      });
      response.write('Page Not Found');
      response.end();
    }else{
      response.writeHead(200, {
        'Content-Type': 'application/json', //<<-- Do I need content length?
        'success': true
      });
      response.write(data);
      response.end();
      }
  });

}



function postRequest(request, response){
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
          'success' : false
        });
          response.write('Page Not Found');
          response.end();
        }else{
          response.writeHead(200, {
          'Content-Type': 'application/json',
          'success' : true
        });
          response.write(data);
          response.end();
        }
      });
    }else{
      console.log('New File Saved');
      fs.writeFile('./public/' + pathName + '.html', data, (err) => {
        if (err) throw err;
        console.log('Error');
        });
    }
  });
}

//create file for favico!