System.register(['../AnimalSetInfo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimalSetInfo_1;
    return {
        setters:[
            function (AnimalSetInfo_1_1) {
                AnimalSetInfo_1 = AnimalSetInfo_1_1;
            }],
        execute: function() {
            describe('Animal Set Info', function () {
                it("should return singular", function () {
                    expect(AnimalSetInfo_1.AnimalSetInfo.singular("chickens")).toBe("chicken");
                });
                it("should return capped", function () {
                    expect(AnimalSetInfo_1.AnimalSetInfo.capped("chicken")).toBe("Chicken");
                });
            });
        }
    }
});
//# sourceMappingURL=animalSetInfo.spec.js.map