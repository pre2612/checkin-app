#!/usr/bin/env node

'use strict';

var config = require('./server-config');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || config.env;

var express = require('express');
var errorHandler = require('errorhandler');
var logger = require('morgan');
var basicAuth = require('basic-auth');

var app = express();

var auth = function(req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  // change this to something application specific
  if (user.name === config.user.name && user.pass === config.user.password) {
    return next();
  } else {
    return unauthorized(res);
  }
};

app.use(auth);
app.use(logger('dev'));

//change to point to your directory that you wil be serving out of most likey build or dist
app.use(express.static(__dirname + config.dest));

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.set('port', process.env.PORT || config.port);
app.get('/', auth, function(req, res) {
  res.send(200, 'Authenticated');
});

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on %d, in %s mode',
    server.address().port,
    app.get('env'));
});
