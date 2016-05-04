System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Chicken;
    return {
        setters:[],
        execute: function() {
            Chicken = (function () {
                function Chicken(options) {
                    this.name = options.name;
                    this.speed = options.speed;
                    this.maxScare = options.maxScare;
                    this.maxSpeed = options.speed;
                    this.scare = options.maxScare;
                    this.id = options.id;
                }
                Chicken.prototype.reduceScare = function (value) {
                    if (value === void 0) { value = 1; }
                    if (this.scare === 0)
                        return;
                    this.scare = this.scare - value;
                };
                Chicken.prototype.reduceSpeed = function (value) {
                    if (value === void 0) { value = 1; }
                    if (this.speed === 0)
                        return;
                    this.speed = this.speed - value;
                };
                Chicken.prototype.refresh = function () {
                    this.scare = this.maxScare;
                };
                return Chicken;
            }());
            exports_1("Chicken", Chicken);
        }
    }
});
//# sourceMappingURL=chicken.js.map