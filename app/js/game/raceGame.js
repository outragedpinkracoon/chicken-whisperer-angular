System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RaceGame;
    return {
        setters:[],
        execute: function() {
            RaceGame = (function () {
                function RaceGame(options) {
                    this.chickenCounter = 0;
                    this.chickenCounter = 0;
                    this.die = options.die;
                    this.lastRolls = [];
                    this.winningChicken = undefined;
                    this.finishLine = options.finishLine;
                    this.lastChicken = undefined;
                    this.players = options.players;
                    this.chickens = [];
                    this.setupChickens(options.players, this.chickens);
                    this.rollSequence = [[1, 1], [2, 2]];
                    this.rollIndex = 0;
                    this.gameOver = false;
                }
                RaceGame.prototype.setupChickens = function (players, chickens) {
                    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
                        var player = players_1[_i];
                        for (var _a = 0, _b = player.chickens; _a < _b.length; _a++) {
                            var chicken = _b[_a];
                            chicken.owner = player;
                            chickens.push(chicken);
                        }
                    }
                };
                RaceGame.prototype.updateCurrentChicken = function () {
                    if (this.allChickensHaveExploded())
                        return false;
                    if (this.chickenCounter == this.chickens.length)
                        this.chickenCounter = 0;
                    this.lastChicken = this.currentChicken;
                    var nextChicken = this.chickens[this.chickenCounter];
                    if (nextChicken.hasExploded) {
                        this.chickenCounter++;
                        return this.updateCurrentChicken();
                    }
                    this.currentChicken = nextChicken;
                    this.chickenCounter++;
                };
                RaceGame.prototype.allChickensHaveExploded = function () {
                    var intact = this.chickens.filter(function (c) { return !c.hasExploded; });
                    if (intact == 0) {
                        this.gameOver = true;
                        return true;
                    }
                    return false;
                };
                RaceGame.prototype.nextTurn = function () {
                    if (this.winningChicken != undefined || this.gameOver)
                        return;
                    this.updateCurrentChicken();
                };
                RaceGame.prototype.roll = function () {
                    if (this.gameOver)
                        return;
                    //this.lastRolls = this.die.rollMultiple(2);
                    //keep for dice simulation
                    this.lastRolls = this.rollSequence[this.rollIndex];
                    this.rollIndex++;
                    if (this.rollIndex > this.rollSequence.length - 1)
                        this.rollIndex = 0;
                    var result = (this.calculateSuccess(this.lastRolls)) ? this.success() : this.failure();
                    return result;
                };
                RaceGame.prototype.rolledDoubleOne = function () {
                    return this.lastRolls[0] == 1 && this.lastRolls[1] == 1;
                };
                RaceGame.prototype.rolledTooHigh = function (rollResult) {
                    return rollResult - this.currentChicken.speed >= 22;
                };
                RaceGame.prototype.calculateSuccess = function () {
                    var reduced = this.lastRolls.reduce(function (prev, curr) { return prev + curr; });
                    if (this.rolledDoubleOne() || this.rolledTooHigh(reduced)) {
                        this.currentChicken.explode();
                        return false;
                    }
                    return reduced % 2 == 0;
                };
                RaceGame.prototype.success = function () {
                    this.currentChicken.move();
                    this.checkForWinner();
                    return true;
                };
                RaceGame.prototype.isWon = function () {
                    return this.winningChicken != undefined;
                };
                RaceGame.prototype.checkForWinner = function () {
                    if (this.currentChicken.racePosition >= this.finishLine) {
                        this.winningChicken = this.currentChicken;
                    }
                };
                RaceGame.prototype.failure = function () {
                    return false;
                };
                return RaceGame;
            }());
            exports_1("RaceGame", RaceGame);
        }
    }
});
//# sourceMappingURL=raceGame.js.map