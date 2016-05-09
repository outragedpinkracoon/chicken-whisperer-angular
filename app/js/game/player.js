System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Player;
    return {
        setters:[],
        execute: function() {
            Player = (function () {
                function Player(name) {
                    this.name = name;
                    this.chickens = [];
                    this.isWhisperer = false;
                }
                Player.prototype.addChicken = function (chicken) {
                    this.chickens.push(chicken);
                };
                Player.prototype.hasChickens = function () {
                    return this.chickenCount() > 0;
                };
                Player.prototype.chickenCount = function () {
                    return this.chickens.length;
                };
                return Player;
            }());
            exports_1("Player", Player);
        }
    }
});
//# sourceMappingURL=player.js.map