'use strict';

//once called this route is registered
exports.register = function(server, options, next){

  server.route({
    method: 'GET',
    path: '/squareSum/{nums}',
    config: {
      description: 'squareSum nums',
      handler: function(request, reply){
        var numString = request.params.nums.split(',');
        var powers = numString.map(function(num){
          return Math.pow(parseInt(num), 2);
        });
        var total = powers.reduce(function(a,b){
          return a + b;
        });
        return reply({squareSum: total });
      }
    }
  });
  //tells hapi to register the next route
  return next();
};

exports.register.attributes = {
  name: 'squareSum'
};
