import {WhispererApproachStrategy} from '../whispererApproachStrategy';
import {WhispererChecker} from '../whispererChecker';
import {Die} from '../die';

describe("Whisperer Approach Strategy", function(){

  var strategy;
  var fakeDie;
  
  beforeEach(function(){
    var options = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    
    fakeDie = {
      nums: [2,1],
      roll: function(){
         return this.nums.pop();
      },
      rollMultiple :function(){
        return this.nums;
      }
    }
    
    strategy = new WhispererApproachStrategy(options);
  });

  it("should be successful on a roll without a 1", function(){
    fakeDie.nums = [4,3];
    strategy.die = fakeDie;

    var result = strategy.approach({});

    expect(result).toBe(true);
  });

  it("should be unsuccessful on a roll containing a 1", function(){
    fakeDie.nums = [4,1];
    strategy.die = fakeDie;

    var result = strategy.approach({});

    expect(result).toBe(false);
  });

  it("should call whispererChecker", function(){
    fakeDie.nums = [4,1];
    strategy.die = fakeDie;
    
    spyOn(strategy.whispererChecker,"update");

    strategy.approach({});

    expect(strategy.whispererChecker.update).toHaveBeenCalled();
  });
});