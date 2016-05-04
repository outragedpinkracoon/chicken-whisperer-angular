import {WhispererChecker} from './whispererChecker'
import {Player} from './player'

describe("Whisperer Checker", function(){
  
  var checker;
  var player; 

  beforeEach(function(){
    checker = new WhispererChecker();
    player = new Player("Valerie");
  });

  it("should gain whisperer", function(){
    var result = checker.gainsWhisperer([2,2], player);
    expect(result).toBe(true);
  });

  it("should not gain whisperer", function(){
    var result = checker.gainsWhisperer([2,1], player);
    expect(result).toBe(false);
  });

  it("should lose whisperer", function(){
    var result = checker.losesWhisperer([1,6]);
    expect(result).toBe(true);
  });

  it("should not lose whisperer", function(){
    var result = checker.losesWhisperer([2,6]);
    expect(result).toBe(false);
  });

  it("should set player as whisperer", function(){
    var result = checker.update([2,2],player);
    expect(player.isWhisperer).toBe(true);
  });

  it("should not set player as whisperer", function(){
    var result = checker.update([1,2],player);
    expect(player.isWhisperer).toBe(false);
  });

  it("should make player lose whisperer", function(){
    player.isWhisperer = true;
    var result = checker.update([1,2],player);
    expect(player.isWhisperer).toBe(false);
  });

});