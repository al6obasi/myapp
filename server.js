var express = require('express')
var app = express();
var path= require("path");
var port = process.env.PORT || 3033;
app.use(express.static(__dirname + '/client'));
//console.log(__dirname)

app.listen(port);

console.log("Running at Port 3000",__dirname);
