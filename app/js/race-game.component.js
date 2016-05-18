System.register(['angular2/core', './game/raceGame', './race-positions.component', './race-results.component'], function(exports_1, context_1) {
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
    var core_1, raceGame_1, race_positions_component_1, race_results_component_1;
    var RaceGameComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (raceGame_1_1) {
                raceGame_1 = raceGame_1_1;
            },
            function (race_positions_component_1_1) {
                race_positions_component_1 = race_positions_component_1_1;
            },
            function (race_results_component_1_1) {
                race_results_component_1 = race_results_component_1_1;
            }],
        execute: function() {
            RaceGameComponent = (function () {
                function RaceGameComponent() {
                }
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', raceGame_1.RaceGame)
                ], RaceGameComponent.prototype, "game", void 0);
                RaceGameComponent = __decorate([
                    core_1.Component({
                        selector: 'race-game',
                        templateUrl: 'app/views/race-game/race-game.component.html',
                        styleUrls: ['app/views/race-game/race-game.component.css'],
                        directives: [race_positions_component_1.RacePositionsComponent, race_results_component_1.RaceResultsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RaceGameComponent);
                return RaceGameComponent;
            }());
            exports_1("RaceGameComponent", RaceGameComponent);
        }
    }
});
//# sourceMappingURL=race-game.component.js.map