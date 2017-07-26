'use strict'

var express = require("express");
var config = require('./config/database_local.js');
var bodyParser = require('body-parser');
var app = express();


// =========== middleware ======================Questionnaire
// Initial the the passport 
app.use(bodyParser.json());


// routes =========================================================
var routes = require("./route/routes.js")(app);


// load the files which are in the controllers and models directory
app.use('/controllers', express.static(__dirname + 'server/controllers'));
app.use('/models', express.static(__dirname + 'server/models'));
app.use('/', express.static(__dirname + '/'));

var server = app.listen(8080, function () {
    console.log('Server listening at port : %s', server.address().port);
});
