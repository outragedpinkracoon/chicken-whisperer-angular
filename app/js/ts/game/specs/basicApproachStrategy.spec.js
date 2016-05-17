System.register(['../basicApproachStrategy', '../whispererChecker', '../die'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var basicApproachStrategy_1, whispererChecker_1, die_1;
    return {
        setters:[
            function (basicApproachStrategy_1_1) {
                basicApproachStrategy_1 = basicApproachStrategy_1_1;
            },
            function (whispererChecker_1_1) {
                whispererChecker_1 = whispererChecker_1_1;
            },
            function (die_1_1) {
                die_1 = die_1_1;
            }],
        execute: function() {
            describe("Basic Approach Strategy", function () {
                var strategy;
                var fakeDie;
                beforeEach(function () {
                    var options = {
                        die: new die_1.Die(),
                        whispererChecker: new whispererChecker_1.WhispererChecker()
                    };
                    strategy = new basicApproachStrategy_1.BasicApproachStrategy(options);
                    fakeDie = {
                        nums: [2, 1],
                        roll: function () {
                            return this.nums.pop();
                        },
                        rollMultiple: function () {
                            return this.nums;
                        }
                    };
                });
                it("should be successful on even roll", function () {
                    fakeDie.nums = [2, 2];
                    strategy.die = fakeDie;
                    var result = strategy.approach({});
                    expect(result).toBe(true);
                });
                it("should be unsuccessful on odd roll", function () {
                    strategy.die = fakeDie;
                    var result = strategy.approach({});
                    expect(result).toBe(false);
                });
                it("should call whispererChecker", function () {
                    strategy.die = fakeDie;
                    spyOn(strategy.whispererChecker, "update");
                    strategy.approach({});
                    expect(strategy.whispererChecker.update).toHaveBeenCalled();
                });
                it("should have a die", function () {
                    expect(strategy.die).not.toBe(undefined);
                });
                it("should save the last roll", function () {
                    strategy.die = fakeDie;
                    strategy.approachRoll();
                    expect(strategy.lastRoll).toEqual([2, 1]);
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
//# sourceMappingURL=basicApproachStrategy.spec.js.map