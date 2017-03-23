module.exports = function( string, count ) {
  var str = string + 's';
  if ( 1 === count ) {
    str = string;
  }
  return str;
};
