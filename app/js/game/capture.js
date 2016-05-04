System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Capture;
    return {
        setters:[],
        execute: function() {
            Capture = (function () {
                function Capture(options) {
                    this.chickenPen = options.chickenPen;
                    this.die = options.die;
                }
                Capture.prototype.attempt = function (player, chicken, chickenPen, captureDice) {
                    var rolls = this.die.rollMultiple(captureDice);
                    var result;
                    if (this.successfulRoll(rolls, chicken)) {
                        result = this.success(chickenPen, player, chicken);
                    }
                    else {
                        result = this.failure(chicken);
                    }
                    return result;
                };
                Capture.prototype.successfulRoll = function (result, chicken) {
                    var sum = result.reduce(function (prev, curr) { return prev + curr; });
                    return sum >= chicken.speed;
                };
                Capture.prototype.failure = function (chicken) {
                    chicken.reduceSpeed();
                    return false;
                };
                Capture.prototype.success = function (chickenPen, player, chicken) {
                    chickenPen.remove(chicken);
                    player.addChicken(chicken);
                    return true;
                };
                return Capture;
            }());
            exports_1("Capture", Capture);
        }
    }
});
//# sourceMappingURL=capture.js.map