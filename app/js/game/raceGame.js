System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RaceGame;
    return {
        setters:[],
        execute: function() {
            RaceGame = (function () {
                function RaceGame(players, die) {
                    this.chickenCounter = 0;
                    this.players = players;
                    this.currentPlayer = this.players[0];
                    this.currentChicken = players[0].chickens[0];
                    this.chickenCounter = 0;
                    this.die = die;
                }
                RaceGame.prototype.updateCurrentChicken = function () {
                    this.chickenCounter++;
                    if (this.chickenCounter > this.currentPlayer.chickenCount()) {
                        this.chickenCounter = 0;
                        this.updateCurrentPlayer();
                    }
                    this.currentChicken = this.currentPlayer.chickens[this.chickenCounter];
                };
                RaceGame.prototype.roll = function () {
                    var roll = this.die.rollAndReduce(2);
                    var result = (roll % 2 == 0) ? this.success() : this.failure();
                    return result;
                };
                RaceGame.prototype.success = function () {
                    return true;
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