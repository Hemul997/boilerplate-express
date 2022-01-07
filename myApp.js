var express = require('express');
var app = express();


app.get('/', function(req, res) {
    indexFileName = '/views/index.html';
    resourcePath = __dirname + indexFileName;
    res.sendFile(resourcePath)
});

































 module.exports = app;
