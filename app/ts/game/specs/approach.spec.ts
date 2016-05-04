import {Player} from "../player";
import {Chicken} from "../chicken";
import {ChickenPen} from "../chickenPen";
import {Approach} from "../approach";
import {Die} from "../die";
import {WhispererChecker} from "../whispererChecker";
import {BasicApproachStrategy} from "../basicApproachStrategy";

describe("Approach", function(){
  var approach;
  var fakeDie;
  var chickenPen;

  beforeEach(function(){

    var strategyOptions = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    
    chickenPen = new ChickenPen([
      new Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1 }),
      new Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 }),
      new Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 }),
      new Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2 })
    ]);

    var strategy = new BasicApproachStrategy(strategyOptions);
    var options = {
      chickenPen: chickenPen,
      strategies: {
        basic: strategy
      }
    }
    
     fakeDie = {
      nums: [1,1],
      roll: function(){
         return this.nums.pop();
      },
      rollMultiple :function(){
        return this.nums;
      }
    }
    
    approach = new Approach(options);
  });

  it("should have a chickenPen", function() {
    expect(approach.chickenPen).not.toBe(undefined);
  });

  it("should have an approachStrategy", function() {
    expect(approach.strategy).not.toBe(undefined);
  });

  it("should have a chickenPen", function() {
    expect(approach.chickenPen).toEqual(chickenPen);
  });

  it("starts with 0 capture dice", function(){
    expect(approach.captureDice).toBe(0);
  });

  it("gains a capture dice on even roll", function(){
    approach.strategy.die = fakeDie;
    approach.step({});
    expect(approach.captureDice).toBe(1);
  });

  it("scares chickens on odd roll", function(){
    fakeDie.nums = [1,2];
    approach.strategy.die = fakeDie;
    spyOn(approach.chickenPen, "scareChickens");
    
    approach.step({});

    expect(approach.captureDice).toBe(0);
    expect(approach.chickenPen.scareChickens.calls.count()).toEqual(1);
  });

});

