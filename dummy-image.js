var Handlebars = require('handlebars');
var dummyimage = require('dummy-image');

module.exports = function(width, height, outputDir, options) {
  width = parseInt(width, 10) || 300;
  height = parseInt(height, 10) || 169;

  var image = dummyimage({
    width: width,
    height: height,
    type: 'random',
    outputDir: outputDir
  });
  return new Handlebars.SafeString(image);
};
