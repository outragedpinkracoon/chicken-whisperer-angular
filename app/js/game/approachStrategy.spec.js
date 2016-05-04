System.register(['./approachStrategy', './whispererChecker', './die'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var approachStrategy_1, whispererChecker_1, die_1;
    return {
        setters:[
            function (approachStrategy_1_1) {
                approachStrategy_1 = approachStrategy_1_1;
            },
            function (whispererChecker_1_1) {
                whispererChecker_1 = whispererChecker_1_1;
            },
            function (die_1_1) {
                die_1 = die_1_1;
            }],
        execute: function() {
            describe("Approach Strategy", function () {
                var strategy;
                beforeEach(function () {
                    var options = {
                        die: new die_1.Die(),
                        whispererChecker: new whispererChecker_1.WhispererChecker()
                    };
                    strategy = new approachStrategy_1.ApproachStrategy(options);
                });
                it("should have a die", function () {
                    expect(strategy.die).not.toBe(undefined);
                });
                it("should have 2 approach dice", function () {
                    expect(strategy.approachDice).toBe(2);
                });
                it("should have a whispererChecker", function () {
                    expect(strategy.whispererChecker).not.toBe(undefined);
                });
                it("should make approach roll", function () {
                    spyOn(strategy.die, "roll").and.returnValue(4);
                    var result = strategy.approachRoll();
                    expect(result).toEqual([4, 4]);
                });
            });
        }
    }
});
//# sourceMappingURL=approachStrategy.spec.js.map