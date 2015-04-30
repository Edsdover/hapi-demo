'use strict';

//once called this route is registered
exports.register = function(server, options, next){

  server.route({
    method: 'GET',
    path: '/sum/{x}/{y}',
    config: {
      description: 'adds nums',
      handler: function(request, reply){
        var x = request.params.x*1;
        var y = request.params.y*1;
        return reply({sum: x+y});
      }
    }
  });
  //tells hapi to register the next route
  return next();
};

exports.register.attributes = {
  name: 'sum'
};
