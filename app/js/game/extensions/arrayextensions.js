System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArrayExtensions;
    return {
        setters:[],
        execute: function() {
            ArrayExtensions = (function () {
                function ArrayExtensions() {
                }
                ArrayExtensions.rotate = function (array) {
                    if (array.length === 0)
                        return array;
                    var item = array.shift();
                    array.push(item);
                    return array;
                };
                return ArrayExtensions;
            }());
            exports_1("ArrayExtensions", ArrayExtensions);
        }
    }
});
//# sourceMappingURL=arrayextensions.js.map