var express = require('express');
var app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    indexFileName = '/views/index.html';
    resourcePath = __dirname + indexFileName;
    res.sendFile(resourcePath)
});

app.get('/json', function(req, res) {
    jsonValue = {
        "message": "Hello json"
    };
    res.json(jsonValue)
});
































 module.exports = app;
