'use strict';

//read in the package.json file
var Package = require('../../package.json');

//once called this route is registered
exports.register = function(server, options, next){

  server.route({
    method: 'GET',
    path: '/generic/{name}',
    config: {
      description: 'gets any property from package.json',
      handler: function(request, reply){
        return reply({return: Package[request.params.name]});
      }
    }
  });
  //tells hapi to register the next route
  return next();
};

exports.register.attributes = {
  name: 'generic'
};
