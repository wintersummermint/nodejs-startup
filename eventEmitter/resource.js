var util = require("util");
var EventEmitter = require('events').EventEmitter;

var Resource = function(c){
    var e = new EventEmitter();
    process.nextTick(function(){
       var count = 0;
       e.emit('start');
       var t = setInterval(function(){
           e.emit('data', ++count);
           if (count === c) {
               e.emit('end', count);
               clearInterval(t);
           }
        }, 10);
    });
    return(e);
};

module.exports = Resource;