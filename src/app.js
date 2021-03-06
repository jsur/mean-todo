'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public')); //Here express knows to serve static files from public
app.use(parser.json());

app.use('/api', router); //'/api' is the namespace where we serve from.

app.listen(3000, function() {
	console.log("The server is running on port 3000.");
});
