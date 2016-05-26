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
                    this.image = options.image;
                    this.racePosition = 0;
                    this.hasExploded = false;
                }
                Chicken.prototype.reduceScare = function (value) {
                    if (value === void 0) { value = 1; }
                    if (this.scare === 0)
                        return;
                    this.scare = this.scare - value;
                };
                Chicken.prototype.explode = function () {
                    this.hasExploded = true;
                };
                Chicken.prototype.increaseScare = function (value) {
                    if (value === void 0) { value = 1; }
                    this.scare = this.maxScare + value;
                };
                Chicken.prototype.endPhase = function (modifier) {
                    this.reduceSpeed();
                    this.increaseScare(modifier);
                };
                Chicken.prototype.move = function () {
                    this.racePosition += this.speed;
                };
                Chicken.prototype.reduceSpeed = function (value) {
                    if (value === void 0) { value = 1; }
                    if (this.speed === 1)
                        return;
                    this.speed = this.speed - value;
                };
                Chicken.prototype.refresh = function () {
                    this.scare = this.maxScare;
                };
                Chicken.prototype.getImage = function () {
                    if (this.scare === 0) {
                        var index = this.image.indexOf(".");
                        var name = this.image.substring(0, index);
                        var extension = this.image.substring(index, this.image.length);
                        return name + "_gone" + extension;
                    }
                    return this.image;
                };
                return Chicken;
            }());
            exports_1("Chicken", Chicken);
        }
    }
});
//# sourceMappingURL=chicken.js.map