
const assert = require( "assert" );
const ensnme = require( "./ensnme.js" );

assert.equal( ensnme( function yeah( ){ } ).name, "yeah", "should be equal to 'yeah'" );

assert.equal( ensnme( function( ){ }, "yeah" ).name, "yeah", "should be equal to 'yeah'" );

console.log( "ok" );
