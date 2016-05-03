System.register(['../models/chicken'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var chicken_1;
    var CHICKENS;
    return {
        setters:[
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            }],
        execute: function() {
            exports_1("CHICKENS", CHICKENS = [
                new chicken_1.Chicken({ "id": 1, "name": "Popo", "speed": 14, "scare": 1 }),
                new chicken_1.Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "scare": 3 }),
                new chicken_1.Chicken({ "id": 3, "name": "Jojo", "speed": 8, "scare": 3 }),
                new chicken_1.Chicken({ "id": 4, "name": "Colin", "speed": 10, "scare": 2 })
            ]);
        }
    }
});
//# sourceMappingURL=mock-chickens.js.map