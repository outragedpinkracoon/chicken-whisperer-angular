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
            describe("Player", function () {
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
                        nums: [1, 1],
                        roll: function () {
                            return this.nums.pop();
                        },
                        rollMultiple: function () {
                            return this.nums;
                        },
                        rollAndReduce: function () {
                            return this.nums.reduce(function (prev, curr) { return prev + curr; });
                        }
                    };
                    raceGame = new raceGame_1.RaceGame(players, fakeDie);
                    /* Todo: duplicated all over the place */
                });
                it("should have 2 players", function () {
                    expect(raceGame.players.length).toBe(2);
                });
                it("should have chicekn1 as current chicken", function () {
                    expect(raceGame.currentChicken).toEqual(chicken1);
                });
                it("should start with chicken counter at 0", function () {
                    expect(raceGame.chickenCounter).toBe(0);
                });
                it("should start with a first player", function () {
                    expect(raceGame.currentPlayer).toEqual(player1);
                });
                it("should update player", function () {
                    raceGame.updateCurrentPlayer();
                    expect(raceGame.currentPlayer).toEqual(player2);
                });
                it("should start with a currentChicken", function () {
                    expect(raceGame.currentChicken).toEqual(player1.chickens[0]);
                });
                it("should update currentChicken when still same player", function () {
                    raceGame.updateCurrentChicken();
                    expect(raceGame.chickenCounter).toEqual(1);
                    expect(raceGame.currentChicken).toEqual(chicken2);
                });
                it("should update currentChicken when next player", function () {
                    raceGame.updateCurrentChicken();
                    raceGame.updateCurrentChicken();
                    raceGame.updateCurrentChicken();
                    expect(raceGame.chickenCounter).toEqual(0);
                    expect(raceGame.currentChicken).toEqual(chicken3);
                });
                it("should return true on even roll", function () {
                    var result = raceGame.roll();
                    expect(result).toBe(true);
                });
                it("should return false on odd roll", function () {
                    fakeDie.nums = [1, 2];
                    var result = raceGame.roll();
                    expect(result).toBe(false);
                });
            });
        }
    }
});
//# sourceMappingURL=raceGame.spec.js.map