System.register(['../whispererChecker', '../player'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var whispererChecker_1, player_1;
    return {
        setters:[
            function (whispererChecker_1_1) {
                whispererChecker_1 = whispererChecker_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            }],
        execute: function() {
            describe("Whisperer Checker", function () {
                var checker;
                var player;
                beforeEach(function () {
                    checker = new whispererChecker_1.WhispererChecker();
                    player = new player_1.Player("Valerie");
                });
                it("should gain whisperer", function () {
                    var result = checker.gainsWhisperer([2, 2], player);
                    expect(result).toBe(true);
                });
                it("should not gain whisperer on odd roll", function () {
                    var result = checker.gainsWhisperer([2, 1], player);
                    expect(result).toBe(false);
                });
                it("should lose whisperer on roll with 1", function () {
                    var result = checker.losesWhisperer([1, 6]);
                    expect(result).toBe(true);
                });
                it("should not lose whisperer on roll with no 1", function () {
                    var result = checker.losesWhisperer([2, 6]);
                    expect(result).toBe(false);
                });
                it("should set player as whisperer on double", function () {
                    var result = checker.update([2, 2], player);
                    expect(player.isWhisperer).toBe(true);
                });
                it("should set player as whisperer on double 1", function () {
                    var result = checker.update([1, 1], player);
                    expect(player.isWhisperer).toBe(true);
                });
                it("should lose whisperer on double 1 as whisperer", function () {
                    player.isWhisperer = true;
                    var result = checker.update([1, 1], player);
                    expect(player.isWhisperer).toBe(false);
                });
                it("should not set player as whisperer on non double", function () {
                    var result = checker.update([1, 2], player);
                    expect(player.isWhisperer).toBe(false);
                });
                it("should make player lose whisperer on 1", function () {
                    player.isWhisperer = true;
                    var result = checker.update([1, 2], player);
                    expect(player.isWhisperer).toBe(false);
                });
            });
        }
    }
});
//# sourceMappingURL=whispererChecker.spec.js.map