System.register(['angular2/core', './game/chickenPen'], function(exports_1, context_1) {
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
    var core_1, chickenPen_1;
    var ChickensComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chickenPen_1_1) {
                chickenPen_1 = chickenPen_1_1;
            }],
        execute: function() {
            ChickensComponent = (function () {
                function ChickensComponent() {
                }
                ChickensComponent.prototype.onSelect = function (chicken) {
                    chicken.reduceScare();
                    this.selectedChicken = chicken;
                    console.log("child", this.chickenPen);
                };
                __decorate([
                    core_1.Input('chickenPen'), 
                    __metadata('design:type', chickenPen_1.ChickenPen)
                ], ChickensComponent.prototype, "chickenPen", void 0);
                ChickensComponent = __decorate([
                    core_1.Component({
                        selector: 'chicken-pen',
                        templateUrl: 'app/views/chickens/chickens.component.html',
                        styleUrls: ['app/views/chickens/chickens.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChickensComponent);
                return ChickensComponent;
            }());
            exports_1("ChickensComponent", ChickensComponent);
        }
    }
});
//# sourceMappingURL=chickens.component.js.map