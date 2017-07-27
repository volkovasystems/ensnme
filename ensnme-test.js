
const assert = require( "assert" );
const ensnme = require( "./ensnme.js" );

assert.equal( ensnme( function yeah( ){ } ).name, "yeah", "should be equal" );

assert.equal( ensnme( function( ){ }, "yeah" ).name, "yeah", "should be equal" );

console.log( "ok" );
