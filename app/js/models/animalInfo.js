System.register(['./animalSetInfo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var animalSetInfo_1;
    var AnimalInfo;
    return {
        setters:[
            function (animalSetInfo_1_1) {
                animalSetInfo_1 = animalSetInfo_1_1;
            }],
        execute: function() {
            AnimalInfo = (function () {
                function AnimalInfo() {
                }
                AnimalInfo.prototype.singular = function () {
                    return animalSetInfo_1.AnimalSetInfo.singular(this.game.animalSet);
                };
                AnimalInfo.prototype.plural = function () {
                    return this.game.animalSet;
                };
                AnimalInfo.prototype.capped = function (text) {
                    return animalSetInfo_1.AnimalSetInfo.capped(text);
                };
                return AnimalInfo;
            }());
            exports_1("AnimalInfo", AnimalInfo);
        }
    }
});
//# sourceMappingURL=animalInfo.js.map