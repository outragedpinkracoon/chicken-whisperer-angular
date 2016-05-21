import { Chicken } from '../chicken';
describe('Chicken', () => {
  var chicken;

  beforeEach(function() {
    var options = {
      name: "Old Chicken",
      speed: 5,
      maxScare: 3,
      racePosition: 0,
      image: "/app/assets/images/chicken1.jpg"
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

  it("should decrease speeed by 1 and increase scare by 2", function() {
    chicken.endPhase(2);
    expect(chicken.scare).toBe(5);
  });

  it("should increase scare by 1", function() {
    chicken.increaseScare();
    expect(chicken.scare).toBe(4);
  });

  it("should increase race position by speed", function() {
    chicken.move();
    expect(chicken.racePosition).toBe(5);
  });

  it("should decrease speed by 2", function() {
    chicken.reduceSpeed(2);
    expect(chicken.speed).toBe(3);
  });

  it("should not decrease speed below 1", function() {
    chicken.speed = 1;
    chicken.reduceSpeed();
    expect(chicken.speed).toBe(1);
  });

  it("should refresh scare but not speed", function(){
    chicken.speed = 1;
    chicken.scare = 0;

    chicken.refresh();
    
    expect(chicken.speed).toBe(1);
    expect(chicken.scare).toBe(3);
  });

  it("should return normal image", function() {
    expect(chicken.getImage()).toBe("/app/assets/images/chicken1.jpg");
  });

  it("should return gone image", function() {
    chicken.scare = 0;
    expect(chicken.getImage()).toBe("/app/assets/images/chicken1_gone.jpg");
  });
});