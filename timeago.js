var timeago = require('timeago');

module.exports = function(date, options) {

  if(date instanceof Date) {
    date = date;
  } else if(typeof date === 'object') {
    // mongoose object
    date = date.getTimestamp();
  }

  var text = timeago(date);

  return text;
};
