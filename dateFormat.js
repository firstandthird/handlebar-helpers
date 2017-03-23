var Handlebars = require('handlebars');
var moment = require('moment');

module.exports = function(date, options) {

  var opt = options || date;
  if ( !options ){
    date = '';
  }

  if(date instanceof Date) {
    date = date;
  } else {
    date = Date(date);
  }

  var f = opt.hash.format || "MMM Do, YYYY";
  var text = moment(new Date(date)).format(f);

  return new Handlebars.SafeString(text);
};
