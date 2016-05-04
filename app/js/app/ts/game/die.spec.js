System.register(['./die'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var die_1;
    return {
        setters:[
            function (die_1_1) {
                die_1 = die_1_1;
            }],
        execute: function() {
            describe("Die", function () {
                var die;
                beforeEach(function () {
                    die = new die_1.Die();
                });
                it("should roll twice", function () {
                    spyOn(die, "roll").and.returnValue(1);
                    die.rollMultiple(2);
                    expect(die.roll.calls.count()).toEqual(2);
                });
                it("should return the roll results added together", function () {
                    spyOn(die, "roll").and.returnValue(2);
                    var result = die.rollAndReduce(2);
                    expect(result).toBe(4);
                });
                it("should roll twice and return callback result", function () {
                    spyOn(die, "roll").and.returnValue(2);
                    var func = function (x, y) { return x * y; };
                    var result = die.rollAndReduce(2, func);
                    expect(result).toBe(4);
                });
            });
        }
    }
});
//# sourceMappingURL=die.spec.js.map