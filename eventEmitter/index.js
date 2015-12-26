
var Resource = require("./resource");
var r = new Resource(7);

r.on('start', function(){
    console.log('starting !');
});

r.on('data', function() {
    console.log('receiving data');
});

r.on('end',function(t) {
    console.log('done with ' + t + ' data events');
});