System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Approach;
    return {
        setters:[],
        execute: function() {
            Approach = (function () {
                function Approach(options) {
                    this.chickenPen = options.chickenPen;
                    this.captureDice = 0;
                    this.strategies = options.strategies;
                    this.strategy = this.strategies["basic"];
                }
                Approach.prototype.step = function (player) {
                    var result = this.strategy.approach(player);
                    if (result == true) {
                        this.captureDice++;
                    }
                    this.chickenPen.scareChickens();
                };
                Approach.prototype.setStrategy = function (key) {
                    this.strategy = this.strategies[key];
                };
                Approach.prototype.reset = function () {
                    this.captureDice = 0;
                };
                return Approach;
            }());
            exports_1("Approach", Approach);
        }
    }
});
//# sourceMappingURL=approach.js.map