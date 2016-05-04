require("babel-register");
var Player = require("../player.js");
var Chicken = require("../chicken.js");
describe("Player", function () {
    var chicken;
    var player;
    beforeEach(function () {
        var options = {
            name: "Old Chicken",
            speed: 5,
            maxScare: 3
        };
        chicken = new Chicken(options);
        player = new Player("Valerie");
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
//# sourceMappingURL=player_spec.js.map