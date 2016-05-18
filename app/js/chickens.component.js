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
    var ChickensComponent;
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
            ChickensComponent = (function () {
                function ChickensComponent(diceService) {
                    this.diceService = diceService;
                }
                ChickensComponent.prototype.capture = function (chicken) {
                    var captureDice = this.game.approach.captureDice;
                    if (captureDice == 0 || this.game.turnFinished || chicken.scare == 0)
                        return;
                    this.chicken = chicken;
                    var success = this.game.attemptCapture(chicken);
                    this.setupDiceResults(this.game.lastCaptureRolls(), success);
                };
                ChickensComponent.prototype.setupDiceResults = function (rolls, success) {
                    this.lastRolls = rolls;
                    this.diceResults = this.diceService.dieResultsAsUnicode(this.lastRolls);
                    this.total = this.lastRolls.reduce(function (prev, curr) { return prev + curr; });
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
                        providers: [diceService_1.DiceService],
                        directives: [dice_results_component_1.DiceResultsComponent]
                    }), 
                    __metadata('design:paramtypes', [diceService_1.DiceService])
                ], ChickensComponent);
                return ChickensComponent;
            }());
            exports_1("ChickensComponent", ChickensComponent);
        }
    }
});
//# sourceMappingURL=chickens.component.js.map