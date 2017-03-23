var Handlebars = require('handlebars');
module.exports = function(text, opts) {
  text = text.string || text;

  if(!text.length) {
    return '';
  }

  if(text.indexOf(' ') !== -1) {
    return text;
  }

  var length = opts.hash.textLength || 16;

  if(text.length >= length) {
    text = [
      text.slice(0, length),
      '<br/>',
      text.slice(length)
    ].join('');
  }

  return new Handlebars.SafeString(text);
};
