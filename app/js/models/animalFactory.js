System.register(['../game/chickenPen', '../game/chicken'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var chickenPen_1, chicken_1;
    var AnimalFactory;
    return {
        setters:[
            function (chickenPen_1_1) {
                chickenPen_1 = chickenPen_1_1;
            },
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            }],
        execute: function() {
            AnimalFactory = (function () {
                function AnimalFactory() {
                    this.names = {
                        "pandas": ["Edgar", "Chester", "Gerald", "Binky"],
                        "chickens": ["Colin", "Albert", "Pudgy", "Popo"]
                    };
                }
                AnimalFactory.prototype.generateSet = function (animalSet) {
                    var names = this.names[animalSet];
                    var result = this.getAnimals(animalSet, names);
                    return result;
                };
                AnimalFactory.prototype.getAnimals = function (animalSet, names) {
                    var pen = this.defaultPen();
                    var counter = 1;
                    for (var _i = 0, _a = pen.chickens; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.setImage(item, animalSet, counter);
                        this.setName(item, names);
                        counter++;
                    }
                    return pen;
                };
                AnimalFactory.prototype.setName = function (item, names) {
                    item.name = names.pop();
                };
                AnimalFactory.prototype.setImage = function (item, animalSet, counter) {
                    var imageRoot = '/app/assets/images/' + animalSet + '/';
                    var extension = ".png";
                    item.image = imageRoot + counter + extension;
                };
                AnimalFactory.prototype.defaultPen = function () {
                    return new chickenPen_1.ChickenPen([
                        new chicken_1.Chicken({ "id": 1, "speed": 14, "maxScare": 1 }),
                        new chicken_1.Chicken({ "id": 2, "speed": 5, "maxScare": 3 }),
                        new chicken_1.Chicken({ "id": 3, "speed": 8, "maxScare": 3 }),
                        new chicken_1.Chicken({ "id": 4, "speed": 10, "maxScare": 2 })
                    ]);
                };
                return AnimalFactory;
            }());
            exports_1("AnimalFactory", AnimalFactory);
        }
    }
});
//# sourceMappingURL=animalFactory.js.map