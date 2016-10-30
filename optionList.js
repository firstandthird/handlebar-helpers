var Handlebars = require('handlebars');
var _ = require('lodash');

module.exports = function(list, opt) {
  
  var optList = list || [];
  if(optList.legth === 0) {
    return '';
  }

  var optReturn = [];

  _.each(optList, function(optn) {
    var option = '<option value="'+optn+'">'+optn+'</option>';
    optReturn.push(option);
  });

  return new Handlebars.SafeString( optReturn.join("\n"));
};
