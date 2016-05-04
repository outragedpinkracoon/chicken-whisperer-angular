import {ApproachStrategy} from '../approachStrategy';
import {WhispererChecker} from '../whispererChecker';
import {Die} from '../die';

describe("Approach Strategy", function(){

  var strategy;
  beforeEach(function(){
    var options = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    strategy = new ApproachStrategy(options);
  });

  it("should have a die", function(){
    expect(strategy.die).not.toBe(undefined);
  });

  it("should have 2 approach dice", function(){
    expect(strategy.approachDice).toBe(2);
  });

  it("should have a whispererChecker", function(){
    expect(strategy.whispererChecker).not.toBe(undefined);
  });

  it("should make approach roll", function(){
    spyOn(strategy.die,"roll").and.returnValue(4);

    var result = strategy.approachRoll();

    expect(result).toEqual([4,4]);
  });

});