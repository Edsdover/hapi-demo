'use strict';


//imports the hapi module
var Hapi = require('hapi');

var World = require('./plugins/world');
var Version = require('./plugins/version');
var Quote = require('./plugins/quote');
var Generic = require('./plugins/generic');
var Sum = require('./plugins/sum');
var Avg = require('./plugins/avg');
var SquareSum = require('./plugins/squareSum');
var Blipp = require('blipp');
var Good = require('./plugins/good');

//takes 2 arguments, port is the port number, next is a function
exports.init = function(port, next){
  //Start the hapi server.
  var server = new Hapi.Server();
  //creating a connection with port
  server.connection({port: port});
  //calls a register function in plugins.js
  //takes array of plugins
  server.register([Blipp, Good, World, Version, Generic, Sum, Avg, SquareSum, Quote], function(err){
    if(err){return next(err);}
    //spins up server, callback is the error
    server.start(function(err){
        //calling the callback
        //next is the callback function
        return next(err, server);
      });
  });
};
