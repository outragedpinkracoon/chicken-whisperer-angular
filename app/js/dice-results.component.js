System.register(['./services/diceService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var diceService_1;
    var ApproachComponent;
    return {
        setters:[
            function (diceService_1_1) {
                diceService_1 = diceService_1_1;
            }],
        execute: function() {
            ApproachComponent = (function () {
                function ApproachComponent(diceService) {
                    this.diceService = diceService;
                }
                ApproachComponent.prototype.approach = function (functionToEvaluate, lastRollFunc, callback) {
                    this.success = functionToEvaluate();
                    this.lastRoll = lastRollFunc();
                    this.diceResults = this.diceService.dieResultsAsUnicode(this.lastRoll);
                    this.total = this.lastRoll.reduce(function (prev, curr) { return prev + curr; });
                    callback();
                };
                ApproachComponent = __decorate([
                    Component({
                        selector: 'dice-results',
                        templateUrl: 'app/views/approach/dice-results.component.html',
                        styleUrls: ['app/views/approach/dice-results.component.css'],
                        providers: [diceService_1.DiceService]
                    }), 
                    __metadata('design:paramtypes', [diceService_1.DiceService])
                ], ApproachComponent);
                return ApproachComponent;
            }());
            exports_1("ApproachComponent", ApproachComponent);
        }
    }
});
//# sourceMappingURL=dice-results.component.js.map