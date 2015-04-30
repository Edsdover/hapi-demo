'use strict';

var Stock = require('../models/stock')

exports.register = function(server, options, next){

  server.route({
    method: 'GET',
    path: '/quote/{symbol}',
    config: {
      description: 'Get a quote for a dope sym yo',
      handler: function(request, reply){
        var stock = new Stock(request.params.symbol);
        stock.getQuote(function(err, quote){
          return reply({quote: quote});
        });
      }
    }
  });
  //tells hapi to register the next route
  return next();
};

exports.register.attributes = {
  name: 'quote'
};
