var express = require('express');

var app = express.createServer(express.logger());
var fs=require("fs");

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var buffer = new Buffer(1024);
  buffer = fs.readFileSync("index.html");
  //console.log(buffer);
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});