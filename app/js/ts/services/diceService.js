System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DiceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DiceService = (function () {
                function DiceService() {
                    this.sixSidedDie = this.dieUnicode(6);
                }
                DiceService.prototype.dummyDice = function (numberRequired, sideToShow) {
                    var results = [];
                    for (var i = 0; i < numberRequired; i++) {
                        results.push(sideToShow);
                    }
                    return this.dieResultsAsUnicode(results);
                };
                DiceService.prototype.dieResultsAsUnicode = function (rollsArray) {
                    var results = [];
                    for (var _i = 0, rollsArray_1 = rollsArray; _i < rollsArray_1.length; _i++) {
                        var roll = rollsArray_1[_i];
                        results.push(this.dieUnicode(roll));
                    }
                    return results;
                };
                DiceService.prototype.dieUnicode = function (roll) {
                    var lookup = {
                        1: "\u2680",
                        2: "\u2681",
                        3: "\u2682",
                        4: "\u2683",
                        5: "\u2684",
                        6: "\u2685"
                    };
                    return lookup[roll];
                };
                DiceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DiceService);
                return DiceService;
            }());
            exports_1("DiceService", DiceService);
        }
    }
});
//# sourceMappingURL=diceService.js.map