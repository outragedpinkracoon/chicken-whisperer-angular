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
                    this.currentChicken = this.players[0].chickens[0];
                    this.chickenCounter = 0;
                    this.die = options.die;
                    this.lastRolls = [];
                    this.winner = undefined;
                    this.finishLine = options.finishLine;
                }
                RaceGame.prototype.updateCurrentChicken = function () {
                    this.chickenCounter++;
                    if (this.chickenCounter > this.currentPlayer.chickenCount()) {
                        this.chickenCounter = 0;
                        this.updateCurrentPlayer();
                    }
                    this.currentChicken = this.currentPlayer.chickens[this.chickenCounter];
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
                /* Todo duplicate code from capturegame */
                RaceGame.prototype.updateCurrentPlayer = function () {
                    this.currentPlayer = this.rotate(this.players)[0];
                };
                /* Todo duplicate code from capturegame */
                RaceGame.prototype.rotate = function (array) {
                    if (array.length === 0)
                        return array;
                    var item = array.shift();
                    array.push(item);
                    return array;
                };
                return RaceGame;
            }());
            exports_1("RaceGame", RaceGame);
        }
    }
});
//# sourceMappingURL=raceGame.js.map