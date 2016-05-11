System.register(['./chicken'], function(exports_1, context_1) {
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
                new chicken_1.Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1,
                    "image": "http://www.wpclipart.com/cartoon/animals/bird/chicken/Chicken_cartoon_04.svg" }),
                new chicken_1.Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3,
                    "image": "http://www.wpclipart.com/cartoon/animals/bird/chicken/Chicken_cartoon_04.svg" }),
                new chicken_1.Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3,
                    "image": "http://www.wpclipart.com/cartoon/animals/bird/chicken/Chicken_cartoon_04.svg" }),
                new chicken_1.Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2,
                    "image": "http://www.wpclipart.com/cartoon/animals/bird/chicken/Chicken_cartoon_04.svg" })
            ]);
        }
    }
});
//# sourceMappingURL=mock-chickens.js.map