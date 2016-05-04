import {Die} from './die'

describe("Die", function(){

  var die;
  beforeEach(function(){
    die = new Die();
  });

  it("should roll twice", function(){
    spyOn(die, "roll").and.returnValues(1,1);
    die.rollMultiple(2);
    expect(die.roll.calls.count()).toEqual(2);
  });

  it("should return the roll results added together", function(){
    spyOn(die, "roll").and.returnValues(1,1);
    var result = die.rollAndReduce(2);
    expect(result).toBe(2);
  });

  it("should roll twice and return callback result", function(){
    spyOn(die, "roll").and.returnValues(1,2);
    var func = (x,y) => x * y;
    var result = die.rollAndReduce(2, func);
    expect(result).toBe(2);
  });

})