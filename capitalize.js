var Handlebars = require('handlebars');

module.exports = function(str, opts) {
  
  return new Handlebars.SafeString(str.charAt(0).toUpperCase() + str.slice(1));
};
