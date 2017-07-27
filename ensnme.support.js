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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              
              		This will always return the entity.
              	@end-module-documentation
              
              	@include:
              		{
              			"cagd": "cagd",
              			"depher": "depher",
              			"falzy": "falzy",
              			"kein": "kein",
              			"nmde": "nmde",
              			"shft": "shft"
              		}
              	@end-include
              */

var cagd = require("cagd");
var depher = require("depher");
var falzy = require("falzy");
var kein = require("kein");
var nmde = require("nmde");
var shft = require("shft");

var DEFAULT_NAME = "procedure";

var ensnme = function ensnme(entity, resolve, name) {
	/*;
                                                     	@meta-configuration:
                                                     		{
                                                     			"entity:required": "*",
                                                     			"resolve": "function",
                                                     			"name": "string"
                                                     		}
                                                     	@end-meta-configuration
                                                     */

	if (falzy(entity)) {
		throw new Error("invalid entity");
	}

	var parameter = shft(arguments);

	name = depher(parameter, STRING, "");

	resolve = depher(parameter, FUNCTION, function resolve(entity, name) {
		cagd("name", nmde(entity) || name || DEFAULT_NAME, entity);

		return entity;
	});

	/*;
     	@note:
     		This module just ensure the property name exists on the function.
     		This will not check if the type of name is incorrect.
     		Issues will arise based from overriding incorrect type of name.
     	@end-note
     */
	if (!kein("name", entity) || falzy(entity.name)) {
		return resolve(entity, name);
	}

	return entity;
};

module.exports = ensnme;

//# sourceMappingURL=ensnme.support.js.map