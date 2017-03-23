module.exports = function( index, amount, scope ) {
        if(index < amount) {
          return;
        }

        if ( index % amount === 0) {	
          return scope.fn( this );
	}
};
