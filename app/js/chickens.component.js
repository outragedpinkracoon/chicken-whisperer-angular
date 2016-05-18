System.register(['angular2/core', './game/captureGame', './services/diceService', './models/diceResults', './dice-results.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, captureGame_1, diceService_1, diceResults_1, dice_results_component_1;
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
            function (diceResults_1_1) {
                diceResults_1 = diceResults_1_1;
            },
            function (dice_results_component_1_1) {
                dice_results_component_1 = dice_results_component_1_1;
            }],
        execute: function() {
            ChickensComponent = (function (_super) {
                __extends(ChickensComponent, _super);
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
            }(diceResults_1.DiceResults));
            exports_1("ChickensComponent", ChickensComponent);
        }
    }
});
//# sourceMappingURL=chickens.component.js.map