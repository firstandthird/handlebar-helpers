module.exports = function( string ) {
	return string.replace(/ +/g, '-').toLowerCase();
};
