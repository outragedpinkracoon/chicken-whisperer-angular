System.register(['angular2/core', './game/raceGame', './models/diceResultsContainer'], function(exports_1, context_1) {
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
    var core_1, raceGame_1, diceResultsContainer_1;
    var RaceResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (raceGame_1_1) {
                raceGame_1 = raceGame_1_1;
            },
            function (diceResultsContainer_1_1) {
                diceResultsContainer_1 = diceResultsContainer_1_1;
            }],
        execute: function() {
            RaceResultsComponent = (function () {
                function RaceResultsComponent(diceResultsContainer) {
                    this.diceResultsContainer = diceResultsContainer;
                    this.diceResultsContainer = diceResultsContainer;
                }
                RaceResultsComponent.prototype.roll = function () {
                    if (this.game.isWon())
                        return;
                    this.success = this.game.roll();
                    this.diceResultsContainer.setupDiceResults(this.game.lastRolls, this.success);
                    this.game.nextTurn();
                    this.moved = true;
                };
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', raceGame_1.RaceGame)
                ], RaceResultsComponent.prototype, "game", void 0);
                RaceResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'race-results',
                        templateUrl: 'app/views/race-results/race-results.component.html',
                        styleUrls: ['app/views/race-results/race-results.component.css'],
                        providers: [diceResultsContainer_1.DiceResultsContainer]
                    }), 
                    __metadata('design:paramtypes', [diceResultsContainer_1.DiceResultsContainer])
                ], RaceResultsComponent);
                return RaceResultsComponent;
            }());
            exports_1("RaceResultsComponent", RaceResultsComponent);
        }
    }
});
//# sourceMappingURL=race-results.component.js.map