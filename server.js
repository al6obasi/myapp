var express = require('express')
var app = express();
var path    = require("path");
app.use(express.static(__dirname + '/../client'));
//console.log(__dirname)

app.listen(3033);

console.log("Running at Port 3000",__dirname);
