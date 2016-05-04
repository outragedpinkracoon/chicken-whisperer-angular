System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChickenPen;
    return {
        setters:[],
        execute: function() {
            ChickenPen = (function () {
                function ChickenPen(chickens) {
                    this.chickens = chickens.slice();
                }
                ChickenPen.prototype.count = function () {
                    return this.chickens.length;
                };
                ChickenPen.prototype.add = function (chicken) {
                    this.chickens.push(chicken);
                };
                ChickenPen.prototype.hasChickensForCapture = function () {
                    for (var _i = 0, _a = this.chickens; _i < _a.length; _i++) {
                        var chicken = _a[_i];
                        if (chicken.speed > 0)
                            return true;
                    }
                    return false;
                };
                ChickenPen.prototype.refresh = function () {
                    this.chickens.forEach(function (chicken) {
                        chicken.refresh();
                    });
                };
                ChickenPen.prototype.remove = function (chicken_out) {
                    var result = [];
                    for (var _i = 0, _a = this.chickens; _i < _a.length; _i++) {
                        var chicken = _a[_i];
                        if (chicken.id !== chicken_out.id)
                            result.push(chicken);
                    }
                    this.chickens = result;
                };
                ChickenPen.prototype.scareChickens = function () {
                    this.chickens.forEach(function (chicken, index) {
                        chicken.reduceScare();
                    });
                };
                return ChickenPen;
            }());
            exports_1("ChickenPen", ChickenPen);
        }
    }
});
//# sourceMappingURL=chickenPen.js.map