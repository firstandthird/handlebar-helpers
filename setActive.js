var Handlebars = require('handlebars');

module.exports = function(uri, current, opts) {
  var forced = false;

  if (opts.hash && opts.hash.ecards && uri) {
    if (uri.indexOf('ecard') !== -1) {
      forced = true;
    }
  }

  if(uri == current || forced) {
    return new Handlebars.SafeString("class=active");
  }
};
