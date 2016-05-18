System.register(['angular2/core', './game/captureGame', './services/diceService', './dice-results.component'], function(exports_1, context_1) {
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
    var core_1, captureGame_1, diceService_1, dice_results_component_1;
    var ApproachComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (captureGame_1_1) {
                captureGame_1 = captureGame_1_1;
            },
            function (diceService_1_1) {
                diceService_1 = diceService_1_1;
            },
            function (dice_results_component_1_1) {
                dice_results_component_1 = dice_results_component_1_1;
            }],
        execute: function() {
            ApproachComponent = (function () {
                function ApproachComponent(diceService) {
                    this.diceService = diceService;
                    this.sixSidedDie = diceService.sixSidedDie;
                }
                ApproachComponent.prototype.approach = function () {
                    var success = this.game.approachChicken();
                    this.setupDiceResults(this.game.lastAppoachRolls(), success);
                    this.setupCaptureDice();
                };
                ApproachComponent.prototype.setupDiceResults = function (lastRolls, success) {
                    this.success = success;
                    this.lastRolls = lastRolls;
                    this.diceResults = this.diceService.dieResultsAsUnicode(this.lastRolls);
                    this.total = this.lastRolls.reduce(function (prev, curr) { return prev + curr; });
                };
                ApproachComponent.prototype.setupCaptureDice = function () {
                    this.captureDice = this.diceService.dummyDice(this.game.approach.captureDice, 6);
                };
                ApproachComponent.prototype.nextTurn = function () {
                    this.game.nextTurn();
                };
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', captureGame_1.CaptureGame)
                ], ApproachComponent.prototype, "game", void 0);
                ApproachComponent = __decorate([
                    core_1.Component({
                        selector: 'approach',
                        templateUrl: 'app/views/approach/approach.component.html',
                        styleUrls: ['app/views/approach/approach.component.css'],
                        providers: [diceService_1.DiceService],
                        directives: [dice_results_component_1.DiceResultsComponent]
                    }), 
                    __metadata('design:paramtypes', [diceService_1.DiceService])
                ], ApproachComponent);
                return ApproachComponent;
            }());
            exports_1("ApproachComponent", ApproachComponent);
        }
    }
});
//# sourceMappingURL=approach.component.js.map