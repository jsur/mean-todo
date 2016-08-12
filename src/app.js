'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public')); //Here express knows to serve static files from public


app.listen(3000, function() {
	console.log("The server is running on port 3000.");
});