var Handlebars = require('handlebars');
Handlebars.registerHelper('handlebars-lorem', require('handlebars-helper-lorem'));

module.exports = function(count, units, options) {
  var context = {
    count: count,
    units: units
  };
  var template = Handlebars.compile('{{lorem this}}');
  return template(context);
};
