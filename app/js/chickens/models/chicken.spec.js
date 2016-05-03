System.register(['./chicken'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var chicken_1;
    return {
        setters:[
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            }],
        execute: function() {
            describe('Chicken', function () {
                var chicken;
                beforeEach(function () {
                    var options = {
                        name: "Old Chicken",
                        speed: 5,
                        maxScare: 3
                    };
                    chicken = new chicken_1.Chicken(options);
                });
                it("should have a name", function () {
                    expect(chicken.name).toBe("Old Chicken");
                });
                it("should have a speed", function () {
                    expect(chicken.speed).toBe(5);
                });
                it("should have a max speed", function () {
                    expect(chicken.maxSpeed).toBe(5);
                });
                it("should have a max scare value", function () {
                    expect(chicken.maxScare).toBe(3);
                });
                it("should decrease scare by 1", function () {
                    chicken.reduceScare();
                    expect(chicken.scare).toBe(2);
                });
                it("should decrease speed by 2", function () {
                    chicken.reduceSpeed(2);
                    expect(chicken.speed).toBe(3);
                });
                it("should not decrease speed below 0", function () {
                    chicken.speed = 0;
                    chicken.reduceSpeed();
                    expect(chicken.speed).toBe(0);
                });
                it("should refresh scare but not speed", function () {
                    chicken.speed = 1;
                    chicken.scare = 0;
                    chicken.refresh();
                    expect(chicken.speed).toBe(1);
                    expect(chicken.scare).toBe(3);
                });
            });
        }
    }
});
//# sourceMappingURL=chicken.spec.js.map