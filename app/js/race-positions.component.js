System.register(['angular2/core', './game/raceGame'], function(exports_1, context_1) {
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
    var core_1, raceGame_1;
    var RacePositionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (raceGame_1_1) {
                raceGame_1 = raceGame_1_1;
            }],
        execute: function() {
            RacePositionsComponent = (function () {
                function RacePositionsComponent() {
                }
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', raceGame_1.RaceGame)
                ], RacePositionsComponent.prototype, "game", void 0);
                RacePositionsComponent = __decorate([
                    core_1.Component({
                        selector: 'race-positions',
                        templateUrl: 'app/views/race-positions/race-positions.component.html',
                        styleUrls: ['app/views/race-positions/race-positions.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], RacePositionsComponent);
                return RacePositionsComponent;
            }());
            exports_1("RacePositionsComponent", RacePositionsComponent);
        }
    }
});
//# sourceMappingURL=race-positions.component.js.map