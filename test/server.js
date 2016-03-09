'use strict';

var express = require('express'),
    path    = require('path');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use(express.static('../build'));

app.listen(8080);
