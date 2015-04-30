'use strict';

//read in the package.json file
var Package = require('../../package.json');

//once called this route is registered
exports.register = function(server, options, next){
  //
  server.route({
    //sets what the route is doing
    method: 'GET',
    //where it is getting it from
    path: '/version',
    config: {
      description: 'gets app version',
      handler: function(request, reply){
        return reply({version: Package.version});
      }
    }
  });
  //tells hapi to register the next route
  return next();
};

exports.register.attributes = {
  name: 'version'
};
