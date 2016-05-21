System.register(['angular2/core', './game/captureGame'], function(exports_1, context_1) {
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
    var core_1, captureGame_1;
    var PlayerStatusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (captureGame_1_1) {
                captureGame_1 = captureGame_1_1;
            }],
        execute: function() {
            PlayerStatusComponent = (function () {
                function PlayerStatusComponent() {
                }
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', captureGame_1.CaptureGame)
                ], PlayerStatusComponent.prototype, "game", void 0);
                PlayerStatusComponent = __decorate([
                    core_1.Component({
                        selector: 'player-status',
                        templateUrl: 'app/views/player-status/player-status.component.html',
                        styleUrls: ['app/views/player-status/player-status.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayerStatusComponent);
                return PlayerStatusComponent;
            }());
            exports_1("PlayerStatusComponent", PlayerStatusComponent);
        }
    }
});
//# sourceMappingURL=player-status.component.js.map