System.register(['../../game/chickenPen', '../../game/chicken', 'angular2/core'], function(exports_1, context_1) {
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
    var chickenPen_1, chicken_1, core_1;
    var ChickenService;
    return {
        setters:[
            function (chickenPen_1_1) {
                chickenPen_1 = chickenPen_1_1;
            },
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChickenService = (function () {
                function ChickenService() {
                }
                ChickenService.prototype.getChickens = function () {
                    return Promise.resolve(new chickenPen_1.ChickenPen([
                        new chicken_1.Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1 }),
                        new chicken_1.Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 }),
                        new chicken_1.Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 }),
                        new chicken_1.Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2 })
                    ]));
                };
                ChickenService.prototype.getChicken = function (id) {
                    return Promise.resolve(this.getChickens()).then(function (chickenPen) { return chickenPen.chickens.filter(function (chicken) { return chicken.id === id; })[0]; });
                };
                ChickenService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ChickenService);
                return ChickenService;
            }());
            exports_1("ChickenService", ChickenService);
        }
    }
});
//# sourceMappingURL=chicken.service.js.map