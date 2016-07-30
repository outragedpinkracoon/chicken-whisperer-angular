System.register(['../animalFactory', '../../game/chicken'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var animalFactory_1, chicken_1;
    return {
        setters:[
            function (animalFactory_1_1) {
                animalFactory_1 = animalFactory_1_1;
            },
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            }],
        execute: function() {
            describe('Animal Factory', function () {
                var animalFactory;
                beforeEach(function () {
                    animalFactory = new animalFactory_1.AnimalFactory();
                });
                it("should return default pen", function () {
                    var set = animalFactory.defaultPen();
                    expect(set.count()).toBe(4);
                    expect(set.chickens[0].speed).toBe(14);
                });
                it("should have set of names", function () {
                    var chickens = animalFactory.names["chickens"];
                    var pandas = animalFactory.names["pandas"];
                    expect(chickens.length).toBe(4);
                    expect(pandas.length).toBe(4);
                });
                it("should set image", function () {
                    var item = new chicken_1.Chicken({});
                    animalFactory.setImage(item, "chickens", 1);
                    expect(item.image).toEqual("/app/assets/images/chickens/1.png");
                });
                it("should set name", function () {
                    var item = new chicken_1.Chicken({});
                    animalFactory.setName(item, ["Popo", "Pudgy"]);
                    expect(item.name).toEqual("Pudgy");
                });
                it("should return correct animals", function () {
                    var set = animalFactory.generateSet("pandas");
                    expect(set.count()).toBe(4);
                    expect(set.chickens[0].name).toEqual("Binky");
                    expect(set.chickens[0].speed).toBe(14);
                    expect(set.chickens[0].scare).toBe(1);
                    expect(set.chickens[0].image).toEqual("/app/assets/images/pandas/1.png");
                });
            });
        }
    }
});
//# sourceMappingURL=animalFactory.spec.js.map