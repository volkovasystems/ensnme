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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuc25tZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImNhZ2QiLCJyZXF1aXJlIiwiZGVwaGVyIiwiZmFsenkiLCJmbmFtZSIsImtlaW4iLCJwcm90eXBlIiwic2hmdCIsInRydWx5Iiwid2ljaGV2ciIsImVuc25tZSIsImVudGl0eSIsInJlc29sdmUiLCJuYW1lIiwiRXJyb3IiLCJGVU5DVElPTiIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsIlNUUklORyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxRQUFRUCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1RLFVBQVVSLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNUyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDdEQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJVixNQUFPUSxNQUFQLENBQUosRUFBcUI7QUFDcEIsUUFBTSxJQUFJRyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlOLE1BQU9JLE9BQVAsS0FBb0IsQ0FBQ04sUUFBU00sT0FBVCxFQUFrQkcsUUFBbEIsQ0FBekIsRUFBdUQ7QUFDdEQsUUFBTSxJQUFJRCxLQUFKLENBQVcsZ0NBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlFLFlBQVlULEtBQU1VLFNBQU4sQ0FBaEI7O0FBRUFKLFFBQU9YLE9BQVFjLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCLEVBQTNCLENBQVA7O0FBRUFOLFdBQVVWLE9BQVFjLFNBQVIsRUFBbUJELFFBQW5CLEVBQTZCLFNBQVNILE9BQVQsQ0FBa0JELE1BQWxCLEVBQTBCRSxJQUExQixFQUFnQztBQUN0RSxNQUFJUCxRQUFTSyxNQUFULEVBQWlCSSxRQUFqQixDQUFKLEVBQWlDO0FBQ2hDZixRQUFNLE1BQU4sRUFBY1MsUUFBU0ksSUFBVCxFQUFlVCxNQUFPTyxNQUFQLENBQWYsQ0FBZCxFQUFnREEsTUFBaEQ7O0FBRUEsR0FIRCxNQUdNLElBQUlILE1BQU9LLElBQVAsQ0FBSixFQUFtQjtBQUN4QmIsUUFBTSxNQUFOLEVBQWNhLElBQWQsRUFBb0JGLE1BQXBCO0FBQ0E7O0FBRUQsU0FBT0EsTUFBUDtBQUNBLEVBVFMsQ0FBVjs7QUFXQSxLQUFJLENBQUNOLEtBQU0sTUFBTixFQUFjTSxNQUFkLENBQUQsSUFBMkJSLE1BQU9RLE9BQU9FLElBQWQsQ0FBL0IsRUFBcUQ7QUFDcEQsU0FBT0QsUUFBU0QsTUFBVCxFQUFpQkUsSUFBakIsQ0FBUDtBQUNBOztBQUVELFFBQU9GLE1BQVA7QUFDQSxDQXZDRDs7QUF5Q0FRLE9BQU9DLE9BQVAsR0FBaUJWLE1BQWpCIiwiZmlsZSI6ImVuc25tZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImVuc25tZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJlbnNubWUvZW5zbm1lLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImVuc25tZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVuc25tZVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lbnNubWUuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImVuc25tZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEVuc3VyZSBuYW1lIGV4aXN0cy5cclxuXHJcblx0XHRBIHJlc29sdmUgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCB0byByZXNvbHZlIHRoZSBuYW1lIG9mIHRoZSBlbnRpdHkgYmFzZWQgb24gZW50aXR5LlxyXG5cdFx0UmVzb2x2ZSBmdW5jdGlvbiBhY2NlcHRzIHRoZSBlbnRpdHkgYW5kIGFuIG92ZXJyZGRpbmcgbmFtZS5cclxuXHRcdFJlc29sdmUgZnVuY3Rpb24gbXVzdCByZXR1cm4gdGhlIGVudGl0eS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImNhZ2RcIjogXCJjYWdkXCIsXHJcblx0XHRcdFwiZGVwaGVyXCI6IFwiZGVwaGVyXCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIixcclxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcclxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgY2FnZCA9IHJlcXVpcmUoIFwiY2FnZFwiICk7XHJcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcclxuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XHJcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xyXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XHJcblxyXG5jb25zdCBlbnNubWUgPSBmdW5jdGlvbiBlbnNubWUoIGVudGl0eSwgcmVzb2x2ZSwgbmFtZSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxyXG5cdFx0XHRcdFwicmVzb2x2ZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwic3RyaW5nXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIGVudGl0eSApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIHRydWx5KCByZXNvbHZlICkgJiYgIXByb3R5cGUoIHJlc29sdmUsIEZVTkNUSU9OICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWUgcmVzb2x2ZSBwcm9jZWR1cmVcIiApO1xyXG5cdH1cclxuXHJcblx0bGV0IHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xyXG5cclxuXHRuYW1lID0gZGVwaGVyKCBwYXJhbWV0ZXIsIFNUUklORywgXCJcIiApO1xyXG5cclxuXHRyZXNvbHZlID0gZGVwaGVyKCBwYXJhbWV0ZXIsIEZVTkNUSU9OLCBmdW5jdGlvbiByZXNvbHZlKCBlbnRpdHksIG5hbWUgKXtcclxuXHRcdGlmKCBwcm90eXBlKCBlbnRpdHksIEZVTkNUSU9OICkgKXtcclxuXHRcdFx0Y2FnZCggXCJuYW1lXCIsIHdpY2hldnIoIG5hbWUsIGZuYW1lKCBlbnRpdHkgKSApLCBlbnRpdHkgKTtcclxuXHJcblx0XHR9ZWxzZSBpZiggdHJ1bHkoIG5hbWUgKSApe1xyXG5cdFx0XHRjYWdkKCBcIm5hbWVcIiwgbmFtZSwgZW50aXR5ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGVudGl0eTtcclxuXHR9ICk7XHJcblxyXG5cdGlmKCAha2VpbiggXCJuYW1lXCIsIGVudGl0eSApIHx8IGZhbHp5KCBlbnRpdHkubmFtZSApICl7XHJcblx0XHRyZXR1cm4gcmVzb2x2ZSggZW50aXR5LCBuYW1lICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZW50aXR5O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnNubWU7XHJcbiJdfQ==
//# sourceMappingURL=ensnme.support.js.map
