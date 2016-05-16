import { Chicken } from '../chicken';
describe('Chicken', () => {
  var chicken;

  beforeEach(function() {
    var options = {
      name: "Old Chicken",
      speed: 5,
      maxScare: 3,
      racePosition: 0
    }
    chicken = new Chicken(options);
  });

  it("should have a name", function() {
    expect(chicken.name).toBe("Old Chicken");
  });

  it("should have a speed", function() {
    expect(chicken.speed).toBe(5);
  });

  it("should have a racePosition", function() {
    expect(chicken.racePosition).toBe(0);
  });

  it("should have a max speed", function() {
    expect(chicken.maxSpeed).toBe(5);
  });

  it("should have a max scare value", function() {
    expect(chicken.maxScare).toBe(3);
  });

  it("should decrease scare by 1", function() {
    chicken.reduceScare();
    expect(chicken.scare).toBe(2);
  });

  it("should increase race position by speed", function() {
    chicken.move();
    expect(chicken.racePosition).toBe(5);
  });

  it("should decrease speed by 2", function() {
    chicken.reduceSpeed(2);
    expect(chicken.speed).toBe(3);
  });

  it("should not decrease speed below 0", function() {
    chicken.speed = 0;
    chicken.reduceSpeed();
    expect(chicken.speed).toBe(0);
  });

  it("should refresh scare but not speed", function(){
    chicken.speed = 1;
    chicken.scare = 0;

    chicken.refresh();
    
    expect(chicken.speed).toBe(1);
    expect(chicken.scare).toBe(3);
  });
});