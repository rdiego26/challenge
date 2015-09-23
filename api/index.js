/**
 * Created by ramos on 23/09/15.
 */
'use strict';

//Modules dependencies
var express  = require('express'),
    http = require('http'),
    constants = require('./util/constants'),
    app = require('./routes/routes.js');


http.createServer(app).listen(app.get('port'), function() {
    console.log(app.get('title') + ' listening on port ' + app.get('port'));
});