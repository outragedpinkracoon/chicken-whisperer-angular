System.register(['./whispererApproachStrategy', './whispererChecker', './die'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var whispererApproachStrategy_1, whispererChecker_1, die_1;
    return {
        setters:[
            function (whispererApproachStrategy_1_1) {
                whispererApproachStrategy_1 = whispererApproachStrategy_1_1;
            },
            function (whispererChecker_1_1) {
                whispererChecker_1 = whispererChecker_1_1;
            },
            function (die_1_1) {
                die_1 = die_1_1;
            }],
        execute: function() {
            describe("Whisperer Approach Strategy", function () {
                var strategy;
                var fakeDie;
                beforeEach(function () {
                    var options = {
                        die: new die_1.Die(),
                        whispererChecker: new whispererChecker_1.WhispererChecker()
                    };
                    fakeDie = {
                        nums: [2, 1],
                        roll: function () {
                            return this.nums.pop();
                        },
                        rollMultiple: function () {
                            return this.nums;
                        }
                    };
                    strategy = new whispererApproachStrategy_1.WhispererApproachStrategy(options);
                });
                it("should be successful on a roll without a 1", function () {
                    fakeDie.nums = [4, 3];
                    strategy.die = fakeDie;
                    var result = strategy.approach({});
                    expect(result).toBe(true);
                });
                it("should be unsuccessful on a roll containing a 1", function () {
                    fakeDie.nums = [4, 1];
                    strategy.die = fakeDie;
                    var result = strategy.approach({});
                    expect(result).toBe(false);
                });
                it("should call whispererChecker", function () {
                    fakeDie.nums = [4, 1];
                    strategy.die = fakeDie;
                    spyOn(strategy.whispererChecker, "update");
                    strategy.approach({});
                    expect(strategy.whispererChecker.update).toHaveBeenCalled();
                });
            });
        }
    }
});
//# sourceMappingURL=whispererApproachStrategy.spec.js.map