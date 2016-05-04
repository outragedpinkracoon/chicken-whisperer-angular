System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DiceCollection;
    return {
        setters:[],
        execute: function() {
            DiceCollection = (function () {
                function DiceCollection(numberOfApproachDice) {
                    if (numberOfApproachDice === void 0) { numberOfApproachDice = 2; }
                    this.approachDice = numberOfApproachDice;
                    this.captureDice = 0;
                }
                DiceCollection.prototype.addCaptureDie = function () {
                    this.captureDice++;
                };
                return DiceCollection;
            }());
            exports_1("DiceCollection", DiceCollection);
        }
    }
});
//# sourceMappingURL=diceCollection.js.map