'use strict';

//once called this route is registered
exports.register = function(server, options, next){

  server.route({
    method: 'GET',
    path: '/avg/{nums}',
    config: {
      description: 'avg nums',
      handler: function(request, reply){
        var numString = request.params.nums.split(',');
        var legnth = numString.legnth;
        var total = numString.reduce(function(a,b){
          return a + parseInt(b);
        }, 0);
        return reply({avg: total/legnth });
      }
    }
  });
  //tells hapi to register the next route
  return next();
};

exports.register.attributes = {
  name: 'avg'
};
