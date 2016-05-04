System.register(["./player", "./chicken"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var player_1, chicken_1;
    return {
        setters:[
            function (player_1_1) {
                player_1 = player_1_1;
            },
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            }],
        execute: function() {
            describe("Player", function () {
                var chicken;
                var player;
                beforeEach(function () {
                    var options = {
                        name: "Old Chicken",
                        speed: 5,
                        maxScare: 3
                    };
                    chicken = new chicken_1.Chicken(options);
                    player = new player_1.Player("Valerie");
                });
                it("should have a name", function () {
                    expect(player.name).toBe("Valerie");
                });
                it("should recieve a chicken", function () {
                    player.addChicken(chicken);
                    expect(player.chickenCount()).toBe(1);
                });
                it("should not be the whisperer at the start", function () {
                    expect(player.isWhisperer).toBe(false);
                });
            });
        }
    }
});
//# sourceMappingURL=player.spec.js.map