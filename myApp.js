var express = require('express');
var app = express();

//console.log("Hello World")

app.get('/', function(req, res) {
    //res.send('Hello Express');
    indexFileName = '/views/index.html';
    resourcePath = __dirname + indexFileName;
    console.log(resourcePath);
    res.sendFile(resourcePath)
});

































 module.exports = app;
