System.register(['./approachStrategy'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var approachStrategy_1;
    var BasicApproachStrategy;
    return {
        setters:[
            function (approachStrategy_1_1) {
                approachStrategy_1 = approachStrategy_1_1;
            }],
        execute: function() {
            BasicApproachStrategy = (function (_super) {
                __extends(BasicApproachStrategy, _super);
                function BasicApproachStrategy() {
                    _super.apply(this, arguments);
                }
                BasicApproachStrategy.prototype.name = function () {
                    return "BasicApproachStrategy";
                };
                BasicApproachStrategy.prototype.approach = function (player) {
                    var results = this.approachRoll();
                    this.whispererChecker.update(results, player);
                    var reduced = results.reduce(function (prev, curr) { return prev + curr; });
                    return reduced % 2 == 0;
                };
                return BasicApproachStrategy;
            }(approachStrategy_1.ApproachStrategy));
            exports_1("BasicApproachStrategy", BasicApproachStrategy);
        }
    }
});
//# sourceMappingURL=basicApproachStrategy.js.map