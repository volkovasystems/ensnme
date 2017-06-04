"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "ensnme",
			"path": "ensnme/ensnme.js",
			"file": "ensnme.js",
			"module": "ensnme",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ensnme.git",
			"test": "ensnme-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Ensure name exists.

		A resolve function can be passed to resolve the name of the entity based on entity.
		Resolve function accepts the entity and an overrdding name.
		Resolve function must return the entity.
	@end-module-documentation

	@include:
		{
			"cagd": "cagd",
			"depher": "depher",
			"falzy": "falzy",
			"fname": "fname",
			"kein": "kein",
			"protype": "protype",
			"shft": "shft",
			"truly": "truly",
			"wichevr": "wichevr"
		}
	@end-include
*/

const cagd = require( "cagd" );
const depher = require( "depher" );
const falzy = require( "falzy" );
const fname = require( "fname" );
const kein = require( "kein" );
const protype = require( "protype" );
const shft = require( "shft" );
const truly = require( "truly" );
const wichevr = require( "wichevr" );

const ensnme = function ensnme( entity, resolve, name ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*",
				"resolve": "function",
				"name": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) ){
		throw new Error( "invalid entity" );
	}

	if( truly( resolve ) && !protype( resolve, FUNCTION ) ){
		throw new Error( "invalid name resolve procedure" );
	}

	let parameter = shft( arguments );

	name = depher( parameter, STRING, "" );

	resolve = depher( parameter, FUNCTION, function resolve( entity, name ){
		if( protype( entity, FUNCTION ) ){
			cagd( "name", wichevr( name, fname( entity ) ), entity );

		}else if( truly( name ) ){
			cagd( "name", name, entity );
		}

		return entity;
	} );

	if( !kein( "name", entity ) || falzy( entity.name ) ){
		return resolve( entity, name );
	}

	return entity;
};

module.exports = ensnme;
