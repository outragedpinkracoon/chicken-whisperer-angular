System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WhispererChecker;
    return {
        setters:[],
        execute: function() {
            WhispererChecker = (function () {
                function WhispererChecker() {
                }
                WhispererChecker.prototype.update = function (rolls, player) {
                    if (this.gainsWhisperer(rolls)) {
                        player.isWhisperer = true;
                    }
                    if (this.losesWhisperer(rolls)) {
                        player.isWhisperer = false;
                    }
                };
                WhispererChecker.prototype.gainsWhisperer = function (rolls) {
                    return rolls[0] == rolls[1];
                };
                WhispererChecker.prototype.losesWhisperer = function (rolls) {
                    return rolls.indexOf(1) > -1;
                };
                return WhispererChecker;
            }());
            exports_1("WhispererChecker", WhispererChecker);
        }
    }
});
//# sourceMappingURL=whispererChecker.js.map