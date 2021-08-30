var express = require('express');
const quotes = require('./quotes');

var app = express();

app.use(function(req, res, next) {
    const reqOrigin = req.headers['Origin'] || req.headers['ORIGIN'] || req.headers['origin']
    res.header("Access-Control-Allow-Origin", reqOrigin || "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Max-Age", "600")
    // Handles preflight request for CORS
    if (req.method.toLowerCase() === 'options')
      return res.sendStatus(200)
    next()
});

app.get('/quotes', function(req, res){
    quotes.get(res)
});

const port = 3000
app.listen(port, function(){
    console.log('listening on :', port);
});