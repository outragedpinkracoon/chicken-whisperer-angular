System.register(['angular2/core', './game/captureGame', './models/animalInfo'], function(exports_1, context_1) {
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
    var core_1, captureGame_1, animalInfo_1;
    var RulesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (captureGame_1_1) {
                captureGame_1 = captureGame_1_1;
            },
            function (animalInfo_1_1) {
                animalInfo_1 = animalInfo_1_1;
            }],
        execute: function() {
            RulesComponent = (function () {
                function RulesComponent(animalInfo) {
                    this.animalInfo = animalInfo;
                    this.info = animalInfo;
                }
                __decorate([
                    core_1.Input('game'), 
                    __metadata('design:type', captureGame_1.CaptureGame)
                ], RulesComponent.prototype, "game", void 0);
                RulesComponent = __decorate([
                    core_1.Component({
                        selector: 'rules',
                        templateUrl: 'app/views/rules/rules.component.html',
                        styleUrls: ['app/views/rules/rules.component.css'],
                        providers: [animalInfo_1.AnimalInfo]
                    }), 
                    __metadata('design:paramtypes', [animalInfo_1.AnimalInfo])
                ], RulesComponent);
                return RulesComponent;
            }());
            exports_1("RulesComponent", RulesComponent);
        }
    }
});
//# sourceMappingURL=rules.component.js.map