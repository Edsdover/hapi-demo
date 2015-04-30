'use strict';

var Hoek = require('hoek');
//importing the server export
var Server = require('./lib/server');
Server.init(64000, function(err, server){
  //blows up on error
  //!eer is no error
  //if the assertion is false then throws
  Hoek.assert(!err, err);
  console.log('hapi is present', server.info.uri);
});
