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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuc25tZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImNhZ2QiLCJyZXF1aXJlIiwiZGVwaGVyIiwiZmFsenkiLCJrZWluIiwibm1kZSIsInNoZnQiLCJERUZBVUxUX05BTUUiLCJlbnNubWUiLCJlbnRpdHkiLCJyZXNvbHZlIiwibmFtZSIsIkVycm9yIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxPQUFPSCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTU0sZUFBZSxXQUFyQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDdEQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJUixNQUFPTSxNQUFQLENBQUosRUFBcUI7QUFDcEIsUUFBTSxJQUFJRyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLFlBQVlQLEtBQU1RLFNBQU4sQ0FBaEI7O0FBRUFILFFBQU9ULE9BQVFXLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCLEVBQTNCLENBQVA7O0FBRUFMLFdBQVVSLE9BQVFXLFNBQVIsRUFBbUJHLFFBQW5CLEVBQTZCLFNBQVNOLE9BQVQsQ0FBa0JELE1BQWxCLEVBQTBCRSxJQUExQixFQUFnQztBQUN0RVgsT0FBTSxNQUFOLEVBQWNLLEtBQU1JLE1BQU4sS0FBa0JFLElBQWxCLElBQTBCSixZQUF4QyxFQUFzREUsTUFBdEQ7O0FBRUEsU0FBT0EsTUFBUDtBQUNBLEVBSlMsQ0FBVjs7QUFNQTs7Ozs7OztBQU9BLEtBQUksQ0FBQ0wsS0FBTSxNQUFOLEVBQWNLLE1BQWQsQ0FBRCxJQUEyQk4sTUFBT00sT0FBT0UsSUFBZCxDQUEvQixFQUFxRDtBQUNwRCxTQUFPRCxRQUFTRCxNQUFULEVBQWlCRSxJQUFqQixDQUFQO0FBQ0E7O0FBRUQsUUFBT0YsTUFBUDtBQUNBLENBckNEOztBQXVDQVEsT0FBT0MsT0FBUCxHQUFpQlYsTUFBakIiLCJmaWxlIjoiZW5zbm1lLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVuc25tZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZW5zbm1lL2Vuc25tZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZW5zbm1lLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVuc25tZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZW5zbm1lLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZW5zbm1lLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RW5zdXJlIG5hbWUgZXhpc3RzLlxuXG5cdFx0QSByZXNvbHZlIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgdG8gcmVzb2x2ZSB0aGUgbmFtZSBvZiB0aGUgZW50aXR5IGJhc2VkIG9uIGVudGl0eS5cblx0XHRSZXNvbHZlIGZ1bmN0aW9uIGFjY2VwdHMgdGhlIGVudGl0eSBhbmQgYW4gb3ZlcnJkZGluZyBuYW1lLlxuXHRcdFJlc29sdmUgZnVuY3Rpb24gbXVzdCByZXR1cm4gdGhlIGVudGl0eS5cblxuXHRcdFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIHRoZSBlbnRpdHkuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNhZ2RcIjogXCJjYWdkXCIsXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcIm5tZGVcIjogXCJubWRlXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2FnZCA9IHJlcXVpcmUoIFwiY2FnZFwiICk7XG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBubWRlID0gcmVxdWlyZSggXCJubWRlXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuXG5jb25zdCBERUZBVUxUX05BTUUgPSBcInByb2NlZHVyZVwiO1xuXG5jb25zdCBlbnNubWUgPSBmdW5jdGlvbiBlbnNubWUoIGVudGl0eSwgcmVzb2x2ZSwgbmFtZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJyZXNvbHZlXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJuYW1lXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHR9XG5cblx0bGV0IHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdG5hbWUgPSBkZXBoZXIoIHBhcmFtZXRlciwgU1RSSU5HLCBcIlwiICk7XG5cblx0cmVzb2x2ZSA9IGRlcGhlciggcGFyYW1ldGVyLCBGVU5DVElPTiwgZnVuY3Rpb24gcmVzb2x2ZSggZW50aXR5LCBuYW1lICl7XG5cdFx0Y2FnZCggXCJuYW1lXCIsIG5tZGUoIGVudGl0eSApIHx8IG5hbWUgfHwgREVGQVVMVF9OQU1FLCBlbnRpdHkgKTtcblxuXHRcdHJldHVybiBlbnRpdHk7XG5cdH0gKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgbW9kdWxlIGp1c3QgZW5zdXJlIHRoZSBwcm9wZXJ0eSBuYW1lIGV4aXN0cyBvbiB0aGUgZnVuY3Rpb24uXG5cdFx0XHRUaGlzIHdpbGwgbm90IGNoZWNrIGlmIHRoZSB0eXBlIG9mIG5hbWUgaXMgaW5jb3JyZWN0LlxuXHRcdFx0SXNzdWVzIHdpbGwgYXJpc2UgYmFzZWQgZnJvbSBvdmVycmlkaW5nIGluY29ycmVjdCB0eXBlIG9mIG5hbWUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKCAha2VpbiggXCJuYW1lXCIsIGVudGl0eSApIHx8IGZhbHp5KCBlbnRpdHkubmFtZSApICl7XG5cdFx0cmV0dXJuIHJlc29sdmUoIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW5zbm1lO1xuIl19
//# sourceMappingURL=ensnme.support.js.map
