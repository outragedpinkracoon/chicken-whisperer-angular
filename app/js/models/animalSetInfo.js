System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimalSetInfo;
    return {
        setters:[],
        execute: function() {
            AnimalSetInfo = (function () {
                function AnimalSetInfo() {
                }
                AnimalSetInfo.singular = function (animalSet) {
                    return animalSet.substring(0, animalSet.length - 1);
                };
                AnimalSetInfo.capped = function (animalSet) {
                    var first = animalSet[0];
                    var chop = animalSet.substring(1, animalSet.length);
                    first = first.toUpperCase();
                    var result = first + chop;
                    return result;
                };
                return AnimalSetInfo;
            }());
            exports_1("AnimalSetInfo", AnimalSetInfo);
        }
    }
});
//# sourceMappingURL=animalSetInfo.js.map