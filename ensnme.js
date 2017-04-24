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
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ensnme.git",
			"test": "ensnme-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Ensure name exists.

		A resolve function can be passed to resolve the name of the entity based on entity.
		Default resolve function only resolves function names.
		Resolve function must return the entity.
	@end-module-documentation

	@include:
		{
			"ate": "ate",
			"falzy": "falzy",
			"fname": "fname",
			"kein": "kein",
			"protype": "protype",
			"truly": "truly",
			"wichevr": "wichevr"
		}
	@end-include
*/

const ate = require( "ate" );
const falzy = require( "falzy" );
const fname = require( "fname" );
const kein = require( "kein" );
const protype = require( "protype" );
const truly = require( "truly" );
const wichevr = require( "wichevr" );

const ensnme = function ensnme( entity, resolve ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*",
				"resolve": "function"
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) ){
		throw new Error( "invalid entity" );
	}

	if( truly( resolve ) && !protype( resolve, FUNCTION ) ){
		throw new Error( "invalid name resolve procedure" );
	}

	resolve = wichevr( resolve, function resolve( entity ){
		if( protype( entity, FUNCTION ) ){
			ate( "name", fname( entity ), entity );
		}

		return entity;
	} );

	if( !kein( "name", entity ) || falzy( entity.name ) ){
		return resolve( entity );
	}

	return entity;
};

module.exports = ensnme;
