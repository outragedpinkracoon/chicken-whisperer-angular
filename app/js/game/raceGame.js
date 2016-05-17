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
                    this.players = options.players;
                    this.currentPlayer = this.players[0];
                    this.chickenCounter = 0;
                    this.die = options.die;
                    this.lastRolls = [];
                    this.winner = undefined;
                    this.finishLine = options.finishLine;
                    this.currentPlayerIndex = 0;
                }
                RaceGame.prototype.updateCurrentChicken = function () {
                    if (this.chickenCounter == this.currentPlayer.chickenCount()) {
                        this.chickenCounter = 0;
                        this.updateCurrentPlayer();
                    }
                    this.currentChicken = this.currentPlayer.chickens[this.chickenCounter];
                    this.chickenCounter++;
                };
                RaceGame.prototype.nextTurn = function () {
                    if (this.winner != undefined)
                        return;
                    this.updateCurrentChicken();
                };
                RaceGame.prototype.roll = function () {
                    this.lastRolls = this.die.rollMultiple(2);
                    var reduced = this.lastRolls.reduce(function (prev, curr) { return prev + curr; });
                    var result = (reduced % 2 == 0) ? this.success() : this.failure();
                    return result;
                };
                RaceGame.prototype.success = function () {
                    this.currentChicken.move();
                    this.checkForWinner();
                    return true;
                };
                RaceGame.prototype.checkForWinner = function () {
                    if (this.currentChicken.racePosition >= this.finishLine) {
                        this.winner = this.currentChicken;
                    }
                };
                RaceGame.prototype.failure = function () {
                    return false;
                };
                RaceGame.prototype.updateCurrentPlayer = function () {
                    this.currentPlayerIndex++;
                    if (this.currentPlayerIndex == this.players.length) {
                        this.currentPlayerIndex = 0;
                    }
                    this.currentPlayer = this.players[this.currentPlayerIndex];
                };
                return RaceGame;
            }());
            exports_1("RaceGame", RaceGame);
        }
    }
});
//# sourceMappingURL=raceGame.js.map