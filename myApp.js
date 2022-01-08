var express = require('express');
var app = express();
require('dotenv').config()


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    indexFileName = '/views/index.html';
    resourcePath = __dirname + indexFileName;
    res.sendFile(resourcePath)
});

app.get('/json', function(req, res) {
    messageVal = "Hello json";

    if (process.env.MESSAGE_STYLE == "uppercase") {
        console.log("Here")
        messageVal = messageVal.toUpperCase()
    }

    jsonValue = {
        "message": messageVal
    };
    res.json(jsonValue)
});
































 module.exports = app;
