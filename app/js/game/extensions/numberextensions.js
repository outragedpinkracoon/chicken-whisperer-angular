System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NumberExtensions;
    return {
        setters:[],
        execute: function() {
            NumberExtensions = (function () {
                function NumberExtensions() {
                }
                NumberExtensions.isEven = function (number) {
                    number % 2 === 0;
                };
                return NumberExtensions;
            }());
            exports_1("NumberExtensions", NumberExtensions);
        }
    }
});
//# sourceMappingURL=numberextensions.js.map