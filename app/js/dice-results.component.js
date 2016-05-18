System.register(['./services/diceService', 'angular2/core'], function(exports_1, context_1) {
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
    var diceService_1, core_1;
    var DiceResultsComponent;
    return {
        setters:[
            function (diceService_1_1) {
                diceService_1 = diceService_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DiceResultsComponent = (function () {
                function DiceResultsComponent(diceService) {
                    this.diceService = diceService;
                }
                __decorate([
                    core_1.Input('lastRolls'), 
                    __metadata('design:type', Array)
                ], DiceResultsComponent.prototype, "lastRolls", void 0);
                __decorate([
                    core_1.Input('success'), 
                    __metadata('design:type', Boolean)
                ], DiceResultsComponent.prototype, "success", void 0);
                __decorate([
                    core_1.Input('diceResults'), 
                    __metadata('design:type', Array)
                ], DiceResultsComponent.prototype, "diceResults", void 0);
                __decorate([
                    core_1.Input('total'), 
                    __metadata('design:type', Number)
                ], DiceResultsComponent.prototype, "total", void 0);
                DiceResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'dice-results',
                        templateUrl: 'app/views/dice-results/dice-results.component.html',
                        styleUrls: ['app/views/dice-results/dice-results.component.css'],
                        providers: [diceService_1.DiceService]
                    }), 
                    __metadata('design:paramtypes', [diceService_1.DiceService])
                ], DiceResultsComponent);
                return DiceResultsComponent;
            }());
            exports_1("DiceResultsComponent", DiceResultsComponent);
        }
    }
});
//# sourceMappingURL=dice-results.component.js.map