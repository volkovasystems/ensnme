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
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
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

var cagd = require("cagd");
var depher = require("depher");
var falzy = require("falzy");
var fname = require("fname");
var kein = require("kein");
var protype = require("protype");
var shft = require("shft");
var truly = require("truly");
var wichevr = require("wichevr");

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

	if (truly(resolve) && !protype(resolve, FUNCTION)) {
		throw new Error("invalid name resolve procedure");
	}

	var parameter = shft(arguments);

	name = depher(parameter, STRING, "");

	resolve = depher(parameter, FUNCTION, function resolve(entity, name) {
		if (protype(entity, FUNCTION)) {
			cagd("name", wichevr(name, fname(entity)), entity);

		} else if (truly(name)) {
			cagd("name", name, entity);
		}

		return entity;
	});

	if (!kein("name", entity) || falzy(entity.name)) {
		return resolve(entity, name);
	}

	return entity;
};

module.exports = ensnme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuc25tZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImNhZ2QiLCJyZXF1aXJlIiwiZGVwaGVyIiwiZmFsenkiLCJmbmFtZSIsImtlaW4iLCJwcm90eXBlIiwic2hmdCIsInRydWx5Iiwid2ljaGV2ciIsImVuc25tZSIsImVudGl0eSIsInJlc29sdmUiLCJuYW1lIiwiRXJyb3IiLCJGVU5DVElPTiIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsIlNUUklORyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxRQUFRUCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1RLFVBQVVSLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNUyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDdEQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJVixNQUFPUSxNQUFQLENBQUosRUFBcUI7QUFDcEIsUUFBTSxJQUFJRyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlOLE1BQU9JLE9BQVAsS0FBb0IsQ0FBQ04sUUFBU00sT0FBVCxFQUFrQkcsUUFBbEIsQ0FBekIsRUFBdUQ7QUFDdEQsUUFBTSxJQUFJRCxLQUFKLENBQVcsZ0NBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlFLFlBQVlULEtBQU1VLFNBQU4sQ0FBaEI7O0FBRUFKLFFBQU9YLE9BQVFjLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCLEVBQTNCLENBQVA7O0FBRUFOLFdBQVVWLE9BQVFjLFNBQVIsRUFBbUJELFFBQW5CLEVBQTZCLFNBQVNILE9BQVQsQ0FBa0JELE1BQWxCLEVBQTBCRSxJQUExQixFQUFnQztBQUN0RSxNQUFJUCxRQUFTSyxNQUFULEVBQWlCSSxRQUFqQixDQUFKLEVBQWlDO0FBQ2hDZixRQUFNLE1BQU4sRUFBY1MsUUFBU0ksSUFBVCxFQUFlVCxNQUFPTyxNQUFQLENBQWYsQ0FBZCxFQUFnREEsTUFBaEQ7O0FBRUEsR0FIRCxNQUdNLElBQUlILE1BQU9LLElBQVAsQ0FBSixFQUFtQjtBQUN4QmIsUUFBTSxNQUFOLEVBQWNhLElBQWQsRUFBb0JGLE1BQXBCO0FBQ0E7O0FBRUQsU0FBT0EsTUFBUDtBQUNBLEVBVFMsQ0FBVjs7QUFXQSxLQUFJLENBQUNOLEtBQU0sTUFBTixFQUFjTSxNQUFkLENBQUQsSUFBMkJSLE1BQU9RLE9BQU9FLElBQWQsQ0FBL0IsRUFBcUQ7QUFDcEQsU0FBT0QsUUFBU0QsTUFBVCxFQUFpQkUsSUFBakIsQ0FBUDtBQUNBOztBQUVELFFBQU9GLE1BQVA7QUFDQSxDQXZDRDs7QUF5Q0FRLE9BQU9DLE9BQVAsR0FBaUJWLE1BQWpCIiwiZmlsZSI6ImVuc25tZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlbnNubWVcIixcblx0XHRcdFwicGF0aFwiOiBcImVuc25tZS9lbnNubWUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImVuc25tZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlbnNubWVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vuc25tZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVuc25tZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEVuc3VyZSBuYW1lIGV4aXN0cy5cblxuXHRcdEEgcmVzb2x2ZSBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIHRvIHJlc29sdmUgdGhlIG5hbWUgb2YgdGhlIGVudGl0eSBiYXNlZCBvbiBlbnRpdHkuXG5cdFx0UmVzb2x2ZSBmdW5jdGlvbiBhY2NlcHRzIHRoZSBlbnRpdHkgYW5kIGFuIG92ZXJyZGRpbmcgbmFtZS5cblx0XHRSZXNvbHZlIGZ1bmN0aW9uIG11c3QgcmV0dXJuIHRoZSBlbnRpdHkuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNhZ2RcIjogXCJjYWdkXCIsXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNhZ2QgPSByZXF1aXJlKCBcImNhZ2RcIiApO1xuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZuYW1lID0gcmVxdWlyZSggXCJmbmFtZVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XG5cbmNvbnN0IGVuc25tZSA9IGZ1bmN0aW9uIGVuc25tZSggZW50aXR5LCByZXNvbHZlLCBuYW1lICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcInJlc29sdmVcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcIm5hbWVcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBlbnRpdHkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRpZiggdHJ1bHkoIHJlc29sdmUgKSAmJiAhcHJvdHlwZSggcmVzb2x2ZSwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWUgcmVzb2x2ZSBwcm9jZWR1cmVcIiApO1xuXHR9XG5cblx0bGV0IHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdG5hbWUgPSBkZXBoZXIoIHBhcmFtZXRlciwgU1RSSU5HLCBcIlwiICk7XG5cblx0cmVzb2x2ZSA9IGRlcGhlciggcGFyYW1ldGVyLCBGVU5DVElPTiwgZnVuY3Rpb24gcmVzb2x2ZSggZW50aXR5LCBuYW1lICl7XG5cdFx0aWYoIHByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0Y2FnZCggXCJuYW1lXCIsIHdpY2hldnIoIG5hbWUsIGZuYW1lKCBlbnRpdHkgKSApLCBlbnRpdHkgKTtcblxuXHRcdH1lbHNlIGlmKCB0cnVseSggbmFtZSApICl7XG5cdFx0XHRjYWdkKCBcIm5hbWVcIiwgbmFtZSwgZW50aXR5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fSApO1xuXG5cdGlmKCAha2VpbiggXCJuYW1lXCIsIGVudGl0eSApIHx8IGZhbHp5KCBlbnRpdHkubmFtZSApICl7XG5cdFx0cmV0dXJuIHJlc29sdmUoIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW5zbm1lO1xuIl19
//# sourceMappingURL=ensnme.support.js.map
