System.register(['angular2/core', './game/raceGame', './models/diceResultsContainer', './dice-results.component'], function(exports_1, context_1) {
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
    var core_1, raceGame_1, diceResultsContainer_1, dice_results_component_1;
    var RaceGameComponent;
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
            },
            function (dice_results_component_1_1) {
                dice_results_component_1 = dice_results_component_1_1;
            }],
        execute: function() {
            RaceGameComponent = (function () {
                function RaceGameComponent(diceResultsContainer) {
                    this.diceResultsContainer = diceResultsContainer;
                }
                RaceGameComponent.prototype.roll = function () {
                    if (this.game.isWon())
                        return;
                    var success = this.game.roll();
                    this.diceResultsContainer.setupDiceResults(this.game.lastRolls, success);
                    this.game.nextTurn();
                    if (this.game.lastChicken.hasExploded) {
                        var audio = new Audio('/app/assets/sounds/boom.mp3');
                        audio.play();
                    }
                    this.moved = true;
                    this.checkWinSound();
                };
                RaceGameComponent.prototype.explosionImage = function (chicken) {
                    if (chicken.id <= 3)
                        return chicken.id;
                    return 1;
                };
                RaceGameComponent.prototype.checkWinSound = function () {
                    if (this.game.isWon()) {
                        var audio = new Audio('/app/assets/sounds/trumpet.wav');
                        audio.play();
                    }
                };
                RaceGameComponent.prototype.positionPadding = function (chicken) {
                    if (chicken.racePosition === 0)
                        return "2%";
                    var maxPadding = 100;
                    var finishLine = this.game.finishLine;
                    var percentage = chicken.racePosition / finishLine;
                    var result = percentage * maxPadding;
                    if (result > maxPadding)
                        result = maxPadding;
                    return result + "%";
                };
                RaceGameComponent.prototype.currentChicken = function (chicken) {
                    return chicken.name === this.game.currentChicken.name;
                };
                RaceGameComponent.prototype.winningChicken = function (chicken) {
                    return chicken.name === this.game.winningChicken.name;
                };
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', raceGame_1.RaceGame)
                ], RaceGameComponent.prototype, "game", void 0);
                RaceGameComponent = __decorate([
                    core_1.Component({
                        selector: 'race-game',
                        templateUrl: 'app/views/race-game/race-game.component.html',
                        styleUrls: ['app/views/race-game/race-game.component.css'],
                        providers: [diceResultsContainer_1.DiceResultsContainer],
                        directives: [dice_results_component_1.DiceResultsComponent]
                    }), 
                    __metadata('design:paramtypes', [diceResultsContainer_1.DiceResultsContainer])
                ], RaceGameComponent);
                return RaceGameComponent;
            }());
            exports_1("RaceGameComponent", RaceGameComponent);
        }
    }
});
//# sourceMappingURL=race-game.component.js.map