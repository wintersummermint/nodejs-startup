
// Modules Socket.IO, Express, and Async.
//
var http = require('http');
var fs = require('fs');

// var path = require('path');
// var async = require('async');
// var socketio = require('socket.io');
// var express = require('express');

http.createServer(function(request, response){
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents){
    response.write(contents);
    response.end();
  });
}).listen(8080);


