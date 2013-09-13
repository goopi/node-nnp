/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');

/**
 * App configuration.
 */

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(express.favicon());
  app.use(app.router);
  // custom JSON 404 middleware
  app.use(function(req, res){
    res.send(404, { error: '404' });
  });
  // error handling middleware
  app.use(function(err, req, res, next){
    res.send(err.status || 500, { error: err.message });
  });
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/*
 * Models.
 */

require('./models')();

/**
 * Routes.
 */

require('./routes')(app);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Listening on port ' + app.get('port'));
});

process.on('uncaughtException', function(err){
  console.log(err);
});
