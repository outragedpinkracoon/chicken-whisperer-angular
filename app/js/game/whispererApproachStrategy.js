System.register(['./approachStrategy'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var approachStrategy_1;
    var WhispererApproachStrategy;
    return {
        setters:[
            function (approachStrategy_1_1) {
                approachStrategy_1 = approachStrategy_1_1;
            }],
        execute: function() {
            WhispererApproachStrategy = (function (_super) {
                __extends(WhispererApproachStrategy, _super);
                function WhispererApproachStrategy() {
                    _super.apply(this, arguments);
                }
                WhispererApproachStrategy.prototype.name = function () {
                    return "WhispererApproachStrategy";
                };
                WhispererApproachStrategy.prototype.approach = function (player) {
                    var results = this.approachRoll();
                    this.whispererChecker.update(results, player);
                    var index = results.indexOf(1);
                    return index == -1;
                };
                return WhispererApproachStrategy;
            }(approachStrategy_1.ApproachStrategy));
            exports_1("WhispererApproachStrategy", WhispererApproachStrategy);
        }
    }
});
//# sourceMappingURL=whispererApproachStrategy.js.map