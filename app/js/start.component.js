System.register(['angular2/core', './rules.component', './models/animalFactory', './game/captureGame'], function(exports_1, context_1) {
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
    var core_1, rules_component_1, animalFactory_1, captureGame_1;
    var StartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rules_component_1_1) {
                rules_component_1 = rules_component_1_1;
            },
            function (animalFactory_1_1) {
                animalFactory_1 = animalFactory_1_1;
            },
            function (captureGame_1_1) {
                captureGame_1 = captureGame_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent() {
                    this.animalSet = this.animalSets()[0];
                }
                StartComponent.prototype.start = function () {
                    this.game.setPlayers([this.player1Name, this.player2Name]);
                    var animalFactory = new animalFactory_1.AnimalFactory();
                    var pen = animalFactory.generateSet(this.animalSet);
                    this.game.setAnimals(pen);
                    this.game.nextTurn();
                };
                StartComponent.prototype.animalSets = function () {
                    return animalFactory_1.AnimalFactory.animalSets();
                };
                StartComponent.prototype.onAnimalSetChange = function (newSet) {
                    this.animalSet = newSet;
                };
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', captureGame_1.CaptureGame)
                ], StartComponent.prototype, "game", void 0);
                StartComponent = __decorate([
                    core_1.Component({
                        selector: 'start',
                        templateUrl: 'app/views/start/start.component.html',
                        styleUrls: ['app/views/start/start.component.css'],
                        directives: [rules_component_1.RulesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartComponent);
                return StartComponent;
            }());
            exports_1("StartComponent", StartComponent);
        }
    }
});
//# sourceMappingURL=start.component.js.map