
// Modules Socket.IO, Express, and Async.
//
var http = require('http');
// var path = require('path');
// var async = require('async');
// var socketio = require('socket.io');
// var express = require('express');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write("Testing Simple Node Server");
  response.end();
}).listen(8080);


