var express = require('express');
var mod = require('./mod');
var app = express();

app.get('/mod', mod.findAll);

app.get('/mod/:id', mod.findById);

app.listen(3000);
console.log('Listening on port 3000...');
