var Handlebars = require('handlebars');

module.exports = function(uri, current, slug) {
  var url = uri + '/' + slug;

  if ( url === current ) {
    return new Handlebars.SafeString( 'selected=selected' );
  }
};
