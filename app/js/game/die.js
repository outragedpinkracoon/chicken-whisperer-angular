System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Die;
    return {
        setters:[],
        execute: function() {
            Die = (function () {
                function Die(sides) {
                    if (sides === void 0) { sides = 6; }
                    this.sides = sides;
                }
                Die.prototype.roll = function () {
                    return Math.ceil(Math.random() * this.sides);
                };
                Die.prototype.rollAndReduce = function (times, func) {
                    if (func == undefined) {
                        func = function (x, y) { return x + y; };
                    }
                    var results = this.rollMultiple(times);
                    return results.reduce(function (prev, curr) { return func(prev, curr); });
                };
                Die.prototype.rollRandom = function (max) {
                    return Math.ceil(Math.random() * max);
                };
                Die.prototype.rollMultiple = function (times) {
                    var results = [];
                    for (var i = 0; i < times; i++) {
                        results.push(this.roll());
                    }
                    return results;
                };
                return Die;
            }());
            exports_1("Die", Die);
        }
    }
});
//# sourceMappingURL=die.js.map