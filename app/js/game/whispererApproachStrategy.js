System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WhispererApproachStrategy;
    return {
        setters:[],
        execute: function() {
            WhispererApproachStrategy = (function () {
                function WhispererApproachStrategy(options) {
                    this.approachDice = 2;
                    this.die = options.die;
                    this.whispererChecker = options.whispererChecker;
                    this.name = "WhispererApproachStrategy";
                }
                WhispererApproachStrategy.prototype.approachRoll = function () {
                    return this.die.rollMultiple(this.approachDice);
                };
                WhispererApproachStrategy.prototype.approach = function (player) {
                    var results = this.approachRoll();
                    this.whispererChecker.update(results, player);
                    var index = results.indexOf(1);
                    return index == -1;
                };
                return WhispererApproachStrategy;
            }());
            exports_1("WhispererApproachStrategy", WhispererApproachStrategy);
        }
    }
});
//# sourceMappingURL=whispererApproachStrategy.js.map