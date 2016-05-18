System.register(['angular2/core', '../services/diceService'], function(exports_1, context_1) {
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
    var core_1, diceService_1;
    var DiceResultsContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (diceService_1_1) {
                diceService_1 = diceService_1_1;
            }],
        execute: function() {
            DiceResultsContainer = (function () {
                function DiceResultsContainer() {
                    this.diceService = new diceService_1.DiceService();
                }
                DiceResultsContainer.prototype.setupDiceResults = function (lastRolls, success) {
                    this.success = success;
                    this.lastRolls = lastRolls;
                    this.diceResults = this.diceService.dieResultsAsUnicode(this.lastRolls);
                    this.total = this.lastRolls.reduce(function (prev, curr) { return prev + curr; });
                };
                DiceResultsContainer = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DiceResultsContainer);
                return DiceResultsContainer;
            }());
            exports_1("DiceResultsContainer", DiceResultsContainer);
        }
    }
});
//# sourceMappingURL=diceResultsContainer.js.map