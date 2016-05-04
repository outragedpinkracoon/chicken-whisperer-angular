System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ApproachStrategy;
    return {
        setters:[],
        execute: function() {
            ApproachStrategy = (function () {
                function ApproachStrategy(options) {
                    this.approachDice = 2;
                    this.die = options.die;
                    this.whispererChecker = options.whispererChecker;
                }
                ApproachStrategy.prototype.approachRoll = function () {
                    return this.die.rollMultiple(this.approachDice);
                };
                return ApproachStrategy;
            }());
            exports_1("ApproachStrategy", ApproachStrategy);
        }
    }
});
//# sourceMappingURL=approachStrategy.js.map