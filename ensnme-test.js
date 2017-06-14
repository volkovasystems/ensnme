const assert = require( "assert" );
const ensnme = require( "./ensnme.js" );

let yeah = ensnme( function yeah( ){ } );
assert.deepEqual( ensnme( yeah ), yeah, "should be equal" );

console.log( "ok" );
