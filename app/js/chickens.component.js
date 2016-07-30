System.register(['angular2/core', './game/captureGame', './models/diceResultsContainer', './dice-results.component'], function(exports_1, context_1) {
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
    var core_1, captureGame_1, diceResultsContainer_1, dice_results_component_1;
    var ChickensComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (captureGame_1_1) {
                captureGame_1 = captureGame_1_1;
            },
            function (diceResultsContainer_1_1) {
                diceResultsContainer_1 = diceResultsContainer_1_1;
            },
            function (dice_results_component_1_1) {
                dice_results_component_1 = dice_results_component_1_1;
            }],
        execute: function() {
            ChickensComponent = (function () {
                function ChickensComponent(diceResultsContainer) {
                    this.diceResultsContainer = diceResultsContainer;
                    this.diceResultsContainer = diceResultsContainer;
                }
                ChickensComponent.prototype.capture = function (chicken) {
                    if (this.captureNotPossible(chicken))
                        return;
                    this.chicken = chicken;
                    var success = this.game.attemptCapture(chicken);
                    this.diceResultsContainer.setupDiceResults(this.game.lastCaptureRolls(), success);
                    this.playSound(success);
                };
                ChickensComponent.prototype.playSound = function (success) {
                    var sound;
                    if (success) {
                        sound = new Audio("/app/assets/sounds/cluck.wav");
                    }
                    else {
                        sound = new Audio("/app/assets/sounds/gobble.mp3");
                    }
                    sound.play();
                };
                ChickensComponent.prototype.captureNotPossible = function (chicken) {
                    return this.game.captureNotPossible(chicken);
                };
                ChickensComponent.prototype.showFailure = function () {
                    return this.game.turnFinished && !this.game.capture.attempted;
                };
                ChickensComponent.prototype.showSuccess = function () {
                    return this.game.turnFinished && this.game.capture.attempted;
                };
                ChickensComponent.prototype.capturePossible = function (chicken) {
                    return this.game.capturePossible(chicken);
                };
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', captureGame_1.CaptureGame)
                ], ChickensComponent.prototype, "game", void 0);
                ChickensComponent = __decorate([
                    core_1.Component({
                        selector: 'chicken-pen',
                        templateUrl: 'app/views/chickens/chickens.component.html',
                        styleUrls: ['app/views/chickens/chickens.component.css'],
                        providers: [diceResultsContainer_1.DiceResultsContainer],
                        directives: [dice_results_component_1.DiceResultsComponent]
                    }), 
                    __metadata('design:paramtypes', [diceResultsContainer_1.DiceResultsContainer])
                ], ChickensComponent);
                return ChickensComponent;
            }());
            exports_1("ChickensComponent", ChickensComponent);
        }
    }
});
//# sourceMappingURL=chickens.component.js.map