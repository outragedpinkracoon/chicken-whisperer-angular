import {Capture} from '../capture';
import {Die} from '../die';
import {Player} from '../player';
import {ChickenPen} from '../chickenPen';
import {Chicken} from '../chicken';

describe("Capture", function(){

  var capture;
  var die;
  var player;
  var fakeDie;
  var chickenPen;

  beforeEach(function(){

   chickenPen = new ChickenPen([
      new Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1 }),
      new Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 }),
      new Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 }),
      new Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2 })
    ]);
    
    var captureOptions = {
      die: new Die()
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

    capture = new Capture(captureOptions);
    player = new Player("Valerie");
  })

  it("should have a die", function(){
    expect(capture.die).not.toBe(undefined);
  });
  
  it("should return last rolls", function(){
    capture.die = fakeDie;
    var result = capture.attempt(player, chickenPen.chickens[0], chickenPen, 1);
    expect(capture.lastRolls).toEqual([1,1]);

  });

  it("should have a chickenPen", function(){
    expect(capture.die).not.toBe(undefined);
  });
  
  it("should be a successful roll", function(){
    var result = capture.successfulRoll([5,10], chickenPen.chickens[0]);
    expect(result).toBe(true);
  });

  it("should be an unsuccessful roll", function(){
    var result = capture.successfulRoll([1,1], chickenPen.chickens[0]);
    expect(result).toBe(false);
  });

  it("should reduce chicken's speed on failure", function(){
    capture.die = fakeDie;
    var result = capture.failure(chickenPen.chickens[0]);
    
    expect(result).toBe(false);
    expect(chickenPen.chickens[0].speed).toBe(13);
  });


  it("should invoke failure", function(){
    spyOn(capture,"failure");
    
    var result = capture.attempt(player, chickenPen.chickens[0], chickenPen, 1);
    
    expect(capture.failure.calls.count()).toBe(1);
  });

  it("should not alter chicken speed on success", function(){
    var result = capture.success(chickenPen, player, chickenPen.chickens[0]);

    expect(result).toBe(true);
    expect(chickenPen.chickens[0].speed).toBe(5);
  });

  it("should add chicken to player on success", function(){
    spyOn(capture.die, "roll").and.returnValue(10);
    var chicken = chickenPen.chickens[0];
    var result = capture.success(chickenPen, player, chickenPen.chickens[0]);

    expect(result).toBe(true);
    expect(player.chickens[0]).toEqual(chicken);
  });

  it("should remove chicken from chickenPen on success", function(){
    spyOn(capture.die, "roll").and.returnValue(10);
    var chicken = chickenPen.chickens[0];
    var result = capture.success(chickenPen, player, chicken);

    expect(result).toBe(true);
    expect(chickenPen.count()).toEqual(3);
  });

  it("should invoke success", function(){
    spyOn(capture.die, "roll").and.returnValue(16);
    spyOn(capture, "success");
    var chicken = chickenPen.chickens[0];
    var result = capture.attempt(player, chicken, chickenPen, 1);

    expect(capture.success).toHaveBeenCalled();
  });

})