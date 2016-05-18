System.register(['../services/diceService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var diceService_1;
    var DiceResultsContainer;
    return {
        setters:[
            function (diceService_1_1) {
                diceService_1 = diceService_1_1;
            }],
        execute: function() {
            DiceResultsContainer = (function () {
                function DiceResultsContainer() {
                    this.diceService = new diceService_1.DiceService();
                }
                DiceResultsContainer.prototype.setupDiceResults = function (lastRolls, success) {
                    this.success = success;
                    this.lastRolls = lastRolls;
                    this.diceResults = this.diceService.dieResultsAsUnicode(this.lastRolls);
                    this.total = this.lastRolls.reduce(function (prev, curr) { return prev + curr; });
                };
                return DiceResultsContainer;
            }());
            exports_1("DiceResultsContainer", DiceResultsContainer);
        }
    }
});
//# sourceMappingURL=diceResults.js.map