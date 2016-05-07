System.register(["../chicken", "../chickenPen", "../approach", "../die", "../whispererChecker", "../basicApproachStrategy"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var chicken_1, chickenPen_1, approach_1, die_1, whispererChecker_1, basicApproachStrategy_1;
    return {
        setters:[
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            },
            function (chickenPen_1_1) {
                chickenPen_1 = chickenPen_1_1;
            },
            function (approach_1_1) {
                approach_1 = approach_1_1;
            },
            function (die_1_1) {
                die_1 = die_1_1;
            },
            function (whispererChecker_1_1) {
                whispererChecker_1 = whispererChecker_1_1;
            },
            function (basicApproachStrategy_1_1) {
                basicApproachStrategy_1 = basicApproachStrategy_1_1;
            }],
        execute: function() {
            describe("Approach", function () {
                var approach;
                var fakeDie;
                var chickenPen;
                beforeEach(function () {
                    var strategyOptions = {
                        die: new die_1.Die(),
                        whispererChecker: new whispererChecker_1.WhispererChecker()
                    };
                    chickenPen = new chickenPen_1.ChickenPen([
                        new chicken_1.Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1 }),
                        new chicken_1.Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 }),
                        new chicken_1.Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 }),
                        new chicken_1.Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2 })
                    ]);
                    var strategy = new basicApproachStrategy_1.BasicApproachStrategy(strategyOptions);
                    var options = {
                        chickenPen: chickenPen,
                        strategies: {
                            "BasicApproachStrategy": strategy
                        }
                    };
                    fakeDie = {
                        nums: [1, 1],
                        roll: function () {
                            return this.nums.pop();
                        },
                        rollMultiple: function () {
                            return this.nums;
                        }
                    };
                    approach = new approach_1.Approach(options);
                });
                it("should have a chickenPen", function () {
                    expect(approach.chickenPen).not.toBe(undefined);
                });
                it("should have an approachStrategy", function () {
                    expect(approach.strategy).not.toBe(undefined);
                });
                it("should have a chickenPen", function () {
                    expect(approach.chickenPen).toEqual(chickenPen);
                });
                it("starts with 0 capture dice", function () {
                    expect(approach.captureDice).toBe(0);
                });
                it("starts with first try true", function () {
                    expect(approach.firstTry).toBe(true);
                });
                it("sets capture dice to 0 and first try to true on reset", function () {
                    approach.firstTry = false;
                    approach.captureDice = 10;
                    approach.reset();
                    expect(approach.firstTry).toBe(true);
                    expect(approach.captureDice).toBe(0);
                });
                it("sets first try true on step", function () {
                    approach.step({});
                    expect(approach.firstTry).toBe(false);
                });
                it("gains a capture dice on even roll", function () {
                    approach.strategy.die = fakeDie;
                    approach.step({});
                    expect(approach.captureDice).toBe(1);
                });
                it("scares chickens on odd roll", function () {
                    fakeDie.nums = [1, 2];
                    approach.strategy.die = fakeDie;
                    spyOn(approach.chickenPen, "scareChickens");
                    approach.step({});
                    expect(approach.captureDice).toBe(0);
                    expect(approach.chickenPen.scareChickens.calls.count()).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=approach.spec.js.map