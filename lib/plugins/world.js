'use strict';


//once called this route is registered
exports.register = function(server, options, next){
  
  server.route({
    method: 'GET',
    path: '/hello',
    config: {
      description: 'returns world',
      handler: function(request, reply){
        return reply({message: 'world'});
      }
    }
  });
  //tells hapi to register the next route
  return next();
};

exports.register.attributes = {
  name: 'world'
};
