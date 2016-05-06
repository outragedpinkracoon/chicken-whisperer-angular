System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasicApproachStrategy;
    return {
        setters:[],
        execute: function() {
            BasicApproachStrategy = (function () {
                function BasicApproachStrategy(options) {
                    this.approachDice = 2;
                    this.die = options.die;
                    this.whispererChecker = options.whispererChecker;
                    this.name = "BasicApproachStrategy";
                    this.lastRoll = [];
                }
                BasicApproachStrategy.prototype.approachRoll = function () {
                    var results = this.die.rollMultiple(this.approachDice);
                    this.lastRoll = results;
                    return results;
                };
                BasicApproachStrategy.prototype.lastRolls = function () {
                    return this.lastRoll;
                };
                BasicApproachStrategy.prototype.approach = function (player) {
                    var results = this.approachRoll();
                    this.whispererChecker.update(results, player);
                    var reduced = results.reduce(function (prev, curr) { return prev + curr; });
                    return reduced % 2 == 0;
                };
                return BasicApproachStrategy;
            }());
            exports_1("BasicApproachStrategy", BasicApproachStrategy);
        }
    }
});
//# sourceMappingURL=basicApproachStrategy.js.map