var express = require('express');
var path = require('path');
var favicon = require('static-favicon');

var app = express();

app.set('port', process.env.PORT || 5001);
app.use(favicon());
app.use(express.static(path.join(__dirname, './public')));

app.listen(app.get("port"));