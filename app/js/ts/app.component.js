System.register(['angular2/core', './chickens.component', './players.component', './start.component', './approach.component', './raceGame.component', './gameInitializer', './raceGameInitializer'], function(exports_1, context_1) {
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
    var core_1, chickens_component_1, players_component_1, start_component_1, approach_component_1, raceGame_component_1, gameInitializer_1, raceGameInitializer_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chickens_component_1_1) {
                chickens_component_1 = chickens_component_1_1;
            },
            function (players_component_1_1) {
                players_component_1 = players_component_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (approach_component_1_1) {
                approach_component_1 = approach_component_1_1;
            },
            function (raceGame_component_1_1) {
                raceGame_component_1 = raceGame_component_1_1;
            },
            function (gameInitializer_1_1) {
                gameInitializer_1 = gameInitializer_1_1;
            },
            function (raceGameInitializer_1_1) {
                raceGameInitializer_1 = raceGameInitializer_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Chicken Whisperer';
                    this.game = gameInitializer_1.GameInitializer.generateGame("Val", "Chris");
                    this.game.chickenPen.chickens = [];
                    this.game.nextTurn();
                    this.raceGame = raceGameInitializer_1.RaceGameInitializer.generateGame();
                    this.raceGame.nextTurn();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/views/app/app.component.html',
                        styleUrls: ['app/views/app/app.component.css'],
                        directives: [chickens_component_1.ChickensComponent, players_component_1.PlayersComponent, start_component_1.StartComponent, approach_component_1.ApproachComponent, raceGame_component_1.RaceGameComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map