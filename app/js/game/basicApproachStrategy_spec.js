require("babel-register");
var BasicApproachStrategy = require('../basicApproachStrategy.js');
var WhispererChecker = require('../whispererChecker.js');
var Die = require('../die');
describe("Basic Approach Strategy", function () {
    var strategy;
    beforeEach(function () {
        var options = {
            die: new Die(),
            whispererChecker: new WhispererChecker()
        };
        strategy = new BasicApproachStrategy(options);
    });
    it("should be successful on even roll", function () {
        spyOn(strategy.die, "roll").and.returnValues(4, 4);
        var result = strategy.approach({});
        expect(result).toBe(true);
    });
    it("should be unsuccessful on odd roll", function () {
        spyOn(strategy.die, "roll").and.returnValues(4, 3);
        var result = strategy.approach({});
        expect(result).toBe(false);
    });
    it("should call whispererChecker", function () {
        spyOn(strategy.die, "roll").and.returnValues(4, 3);
        spyOn(strategy.whispererChecker, "update");
        strategy.approach({});
        expect(strategy.whispererChecker.update).toHaveBeenCalled();
    });
});
//# sourceMappingURL=basicApproachStrategy_spec.js.map