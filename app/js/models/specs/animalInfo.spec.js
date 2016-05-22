System.register(['../AnimalInfo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimalInfo_1;
    return {
        setters:[
            function (AnimalInfo_1_1) {
                AnimalInfo_1 = AnimalInfo_1_1;
            }],
        execute: function() {
            describe('Animal Info', function () {
                it("should return singular", function () {
                    expect(new AnimalInfo_1.AnimalInfo().singular("chickens")).toBe("chicken");
                });
                it("should return capped", function () {
                    expect(new AnimalInfo_1.AnimalInfo().capped("chicken")).toBe("Chicken");
                });
            });
        }
    }
});
//# sourceMappingURL=animalInfo.spec.js.map