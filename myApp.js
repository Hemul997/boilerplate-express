var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();


app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip)
    next();
});

app.get('/', function(req, res) {
    indexFileName = '/views/index.html';
    resourcePath = __dirname + indexFileName;
    res.sendFile(resourcePath)
});

app.get('/:word/echo', function(req, res){
    res.json({
      "echo": req.params.word
    }
    );
});

app.get('/name', function(req, res) {
    console.log(req.query)
    res.json({
        "name": req.query["first"] + ' ' + req.query["last"]
    });
});

app.get('/json', function(req, res) {
    messageVal = "Hello json";

    if (process.env.MESSAGE_STYLE == "uppercase") {
        messageVal = messageVal.toUpperCase()
    }

    jsonValue = {
        "message": messageVal
    };
    res.json(jsonValue)

});

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    //res.send(req.time);
    //console.log(req.time);
    next();   
}, function(req, res){
    jsonValue = {
        time: req.time
    };
    res.send(jsonValue)
});

app.post("/name", function(req, res) {
    res.json({
        "name": req.body["first"] + ' ' + req.body["last"]
    });
});

















 module.exports = app;
