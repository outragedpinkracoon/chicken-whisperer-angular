System.register(["../player", "../chicken", "../raceGame"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var player_1, chicken_1, raceGame_1;
    return {
        setters:[
            function (player_1_1) {
                player_1 = player_1_1;
            },
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            },
            function (raceGame_1_1) {
                raceGame_1 = raceGame_1_1;
            }],
        execute: function() {
            describe("Race Game", function () {
                var chicken1;
                var chicken2;
                var chicken3;
                var chicken4;
                var player1;
                var player2;
                var raceGame;
                var fakeDie;
                beforeEach(function () {
                    player1 = new player_1.Player("Valerie");
                    player2 = new player_1.Player("Jay");
                    var players = [player1, player2];
                    chicken1 = new chicken_1.Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1 });
                    chicken2 = new chicken_1.Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 });
                    chicken3 = new chicken_1.Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 });
                    chicken4 = new chicken_1.Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2 });
                    player1.addChicken(chicken1);
                    player1.addChicken(chicken2);
                    player2.addChicken(chicken3);
                    player2.addChicken(chicken4);
                    fakeDie = {
                        nums: [1, 3],
                        roll: function () {
                            return this.nums.pop();
                        },
                        rollMultiple: function () {
                            return this.nums;
                        },
                        rollAndReduce: function () {
                            return this.nums.reduce(function (prev, curr) { return prev + curr; });
                        },
                        rollRandom: function (max) {
                            return 100;
                        }
                    };
                    var options = {
                        players: players,
                        die: fakeDie,
                        finishLine: 40
                    };
                    raceGame = new raceGame_1.RaceGame(options);
                });
                it("should have 4 chickens", function () {
                    expect(raceGame.chickens.length).toBe(4);
                });
                it("should add owner to chicken", function () {
                    expect(raceGame.chickens[0].owner.name).toBe("Valerie");
                });
                it("should have chicken1 as current chicken", function () {
                    raceGame.nextTurn();
                    expect(raceGame.currentChicken).toEqual(chicken1);
                });
                it("should start with chicken counter at 0", function () {
                    expect(raceGame.chickenCounter).toBe(0);
                });
                it("should return to first chicken", function () {
                    raceGame.updateCurrentChicken();
                    raceGame.updateCurrentChicken();
                    raceGame.updateCurrentChicken();
                    raceGame.updateCurrentChicken();
                    raceGame.updateCurrentChicken();
                    expect(raceGame.chickenCounter).toEqual(1);
                    expect(raceGame.currentChicken).toEqual(chicken1);
                });
                it("should return true on even roll", function () {
                    raceGame.nextTurn();
                    var result = raceGame.roll();
                    expect(result).toBe(true);
                });
                it("should move chicken on even roll", function () {
                    raceGame.nextTurn();
                    var result = raceGame.roll();
                    expect(chicken1.racePosition).toBe(14);
                });
                it("should return false on odd roll", function () {
                    raceGame.nextTurn();
                    fakeDie.nums = [1, 2];
                    var result = raceGame.roll();
                    expect(result).toBe(false);
                });
                it("should not move chicken on odd roll", function () {
                    raceGame.nextTurn();
                    fakeDie.nums = [1, 2];
                    var result = raceGame.roll();
                    expect(chicken1.racePosition).toBe(0);
                });
                it("should not move exploded chicken", function () {
                    raceGame.chickens = [chicken1];
                    raceGame.nextTurn();
                    fakeDie.rollRandom = function () { return 1; };
                    var result = raceGame.roll();
                    expect(chicken1.racePosition).toBe(0);
                });
                it("should skip exploded chicken", function () {
                    raceGame.nextTurn();
                    raceGame.chickens[1].hasExploded = true;
                    raceGame.nextTurn();
                    expect(raceGame.currentChicken.name).toBe("Jojo");
                });
                it("should not take next turn if all chickens exploded", function () {
                    chicken1.hasExploded = true;
                    raceGame.chickens = [chicken1];
                    var result = raceGame.allChickensHaveExploded();
                    expect(result).toBe(true);
                });
                it("returns the last rolls", function () {
                    raceGame.nextTurn();
                    fakeDie.nums = [1, 2];
                    var result = raceGame.roll();
                    expect(raceGame.lastRolls).toEqual([1, 2]);
                });
                it("has finish line of 40", function () {
                    raceGame.nextTurn();
                    expect(raceGame.finishLine).toBe(40);
                });
                it("sets winning chicken", function () {
                    raceGame.nextTurn();
                    chicken1.racePosition = 41;
                    raceGame.checkForWinner();
                    expect(raceGame.winningChicken).toBe(chicken1);
                });
                it("does not set winning chicken", function () {
                    raceGame.nextTurn();
                    chicken1.racePosition = 30;
                    raceGame.checkForWinner();
                    expect(raceGame.winningChicken).toBe(undefined);
                });
                it("should not start won", function () {
                    expect(raceGame.winningChicken).toBe(undefined);
                });
                it("should be won", function () {
                    raceGame.winningChicken = {};
                    expect(raceGame.isWon()).toBe(true);
                });
                it("should start with no last chicken", function () {
                    expect(raceGame.lastChicken).toBe(undefined);
                });
                it("should set the last chicken", function () {
                    raceGame.nextTurn();
                    raceGame.nextTurn();
                    expect(raceGame.lastChicken).toBe(chicken1);
                });
            });
        }
    }
});
//# sourceMappingURL=raceGame.spec.js.map