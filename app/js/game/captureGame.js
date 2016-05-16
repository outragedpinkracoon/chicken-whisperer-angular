System.register(["./player"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var player_1;
    var CaptureGame;
    return {
        setters:[
            function (player_1_1) {
                player_1 = player_1_1;
            }],
        execute: function() {
            CaptureGame = (function () {
                function CaptureGame(options) {
                    this.players = options.players;
                    this.chickenPen = options.chickenPen;
                    this.capture = options.capture;
                    this.approach = options.approach;
                    this.turnFinished = false;
                    this.started = false;
                }
                CaptureGame.prototype.reset = function () {
                    this.chickenPen.refresh();
                    this.approach.reset();
                    this.capture.reset();
                    this.started = true;
                    this.turnFinished = false;
                    this.resetPlayers();
                };
                CaptureGame.prototype.resetPlayers = function () {
                    for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
                        var player = _a[_i];
                        player.isWhisperer = false;
                    }
                };
                CaptureGame.prototype.setPlayers = function (playerNames) {
                    this.players = [];
                    for (var _i = 0, playerNames_1 = playerNames; _i < playerNames_1.length; _i++) {
                        var name = playerNames_1[_i];
                        this.players.push(new player_1.Player(name));
                    }
                    this.started = true;
                };
                CaptureGame.prototype.updateCurrentPlayer = function () {
                    if (this.currentPlayer === undefined) {
                        this.currentPlayer = this.players[0];
                        return;
                    }
                    this.currentPlayer = this.rotate(this.players)[0];
                };
                CaptureGame.prototype.rotate = function (array) {
                    if (array.length === 0)
                        return array;
                    var item = array.shift();
                    array.push(item);
                    return array;
                };
                CaptureGame.prototype.playerCount = function () {
                    return this.players.length;
                };
                CaptureGame.prototype.nextTurn = function () {
                    if (this.lastTurn()) {
                        this.chickenPen.chickens[0].reduceSpeed();
                    }
                    this.updateCurrentPlayer();
                    this.reset();
                };
                CaptureGame.prototype.gameOver = function () {
                    return this.chickenPen.count() == 0;
                };
                CaptureGame.prototype.lastTurn = function () {
                    return this.chickenPen.count() == 1;
                };
                CaptureGame.prototype.approachChicken = function () {
                    if (this.gameOver())
                        return;
                    this.setApproachStrategy();
                    var result = this.approach.step(this.currentPlayer);
                    if (!this.chickenPen.hasChickensForCapture()) {
                        this.turnFinished = true;
                    }
                    return result;
                };
                CaptureGame.prototype.lastAppoachRolls = function () {
                    return this.approach.strategy.lastRolls();
                };
                CaptureGame.prototype.lastCaptureRolls = function () {
                    return this.capture.lastRolls;
                };
                CaptureGame.prototype.setApproachStrategy = function () {
                    if (this.currentPlayer.isWhisperer) {
                        this.approach.setStrategy("WhispererApproachStrategy");
                    }
                    else {
                        this.approach.setStrategy("BasicApproachStrategy");
                    }
                };
                CaptureGame.prototype.attemptCapture = function (chicken) {
                    if (this.turnFinished)
                        return;
                    this.turnFinished = true;
                    return this.capture.attempt(this.currentPlayer, chicken, this.chickenPen, this.approach.captureDice);
                };
                return CaptureGame;
            }());
            exports_1("CaptureGame", CaptureGame);
        }
    }
});
//# sourceMappingURL=captureGame.js.map