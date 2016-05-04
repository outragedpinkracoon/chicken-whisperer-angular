import {BasicApproachStrategy} from './basicApproachStrategy';
import {WhispererChecker} from './whispererChecker';
import {Die} from './die';

describe("Basic Approach Strategy", function(){

  var strategy;
  var fakeDie;
  beforeEach(function(){
    var options = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    strategy = new BasicApproachStrategy(options);
    fakeDie = {
      nums: [2,1],
      roll: function(){
         return this.nums.pop();
      },
      rollMultiple :function(){
        return this.nums;
      }
    }
  });

  it("should be successful on even roll", function(){
    fakeDie.nums = [2,2];
    strategy.die = fakeDie;

    var result = strategy.approach({});

    expect(result).toBe(true);
  });

  it("should be unsuccessful on odd roll", function(){
    strategy.die = fakeDie;
    var result = strategy.approach({});

    expect(result).toBe(false);
  });

  it("should call whispererChecker", function(){
    strategy.die = fakeDie;
    spyOn(strategy.whispererChecker,"update");

    strategy.approach({});

    expect(strategy.whispererChecker.update).toHaveBeenCalled();
  });

});