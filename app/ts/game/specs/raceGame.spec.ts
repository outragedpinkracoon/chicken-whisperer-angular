import {Player}  from "../player"
import {Chicken}  from "../chicken"
import {Die}  from "../die"
import {RaceGame}  from "../raceGame"

describe("Race Game", function() {

  var chicken1;
  var chicken2;
  var chicken3;
  var chicken4;
  var player1;
  var player2;
  var raceGame;
  var fakeDie;

  beforeEach(function() {
    
    player1 = new Player("Valerie");
    player2 = new Player("Jay");

    var players = [player1, player2];

    chicken1 = new Chicken({"id": 1, "name": "Popo", "speed": 14, "maxScare": 1 });
    chicken2 = new Chicken({"id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 });
    chicken3 = new Chicken({"id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 });
    chicken4 = new Chicken({"id": 4, "name": "Colin", "speed": 10, "maxScare": 2 });

    player1.addChicken(chicken1);
    player1.addChicken(chicken2);
    player2.addChicken(chicken3);
    player2.addChicken(chicken4);

    fakeDie = {
      nums: [1,3],
      roll: function(){
         return this.nums.pop();
      },
      rollMultiple :function(){
        return this.nums;
      },
      rollAndReduce: function(){
        return this.nums.reduce((prev,curr) => prev + curr);
      }
    }

    var options = {
      players: players,
      die: fakeDie,
      finishLine: 40
    }

    raceGame = new RaceGame(options);

  });

  it("should have 4 chickens", function() {
    expect(raceGame.chickens.length).toBe(4);
  });

  it("should add owner to chicken", function() {
    expect(raceGame.chickens[0].owner.name).toBe("Valerie");
  });

  it("should have chicken1 as current chicken", function() {
    raceGame.nextTurn();
    expect(raceGame.currentChicken).toEqual(chicken1);
  });

  it("should start with chicken counter at 0", function() {
    expect(raceGame.chickenCounter).toBe(0);
  });

  it("should return to first chicken", function() {
    raceGame.updateCurrentChicken();
    raceGame.updateCurrentChicken();
    raceGame.updateCurrentChicken();
    raceGame.updateCurrentChicken();
    raceGame.updateCurrentChicken();
    expect(raceGame.chickenCounter).toEqual(1);
    expect(raceGame.currentChicken).toEqual(chicken1);
  });

  it("should return true on even roll", function() {
    raceGame.nextTurn();
    var result = raceGame.roll();
    expect(result).toBe(true);
  });

  it("should return false on 1,1 roll", function() {
    fakeDie.nums = [1,1];
    raceGame.nextTurn();
    var result = raceGame.roll();
    expect(result).toBe(false);
  });

  it("should explode chicken on 1,1 roll", function() {
    fakeDie.nums = [1,1];
    raceGame.nextTurn();
    var result = raceGame.roll();
    expect(raceGame.currentChicken.hasExploded).toBe(true);
  });

  it("should explode chicken on roll that is too high", function() {
    fakeDie.nums = [11,11];
    raceGame.nextTurn();
    var result = raceGame.roll();
    expect(raceGame.currentChicken.hasExploded).toBe(true);
  });

  it("should not explode chicken on 2,2 roll", function() {
    fakeDie.nums = [2,2];
    raceGame.nextTurn();
    var result = raceGame.roll();
    expect(raceGame.currentChicken.hasExploded).toBe(false);
  });


  it("should not explode chicken on 1,3 roll", function() {
    fakeDie.nums = [1,3];
    raceGame.nextTurn();
    var result = raceGame.roll();
    expect(raceGame.currentChicken.hasExploded).toBe(false);
  });


  it("should move chicken on even roll", function() {
    raceGame.nextTurn();
    var result = raceGame.roll();
    expect(chicken1.racePosition).toBe(14);
  });

  it("should return false on odd roll", function() {
    raceGame.nextTurn();
    fakeDie.nums = [1,2]
    var result = raceGame.roll();
    expect(result).toBe(false);
  });

  it("should not move chicken on odd roll", function() {
    raceGame.nextTurn();
    fakeDie.nums = [1,2]
    var result = raceGame.roll();
    expect(chicken1.racePosition).toBe(0);
  });

  it("should not move exploded chicken", function() {
    raceGame.chickens = [chicken1]
    raceGame.nextTurn();
    fakeDie.nums = [1,1]
    var result = raceGame.roll();
    expect(chicken1.racePosition).toBe(0);
  });

  it("should skip exploded chicken", function() {
    raceGame.nextTurn();
    raceGame.chickens[1].hasExploded = true;
    raceGame.nextTurn();
    expect(raceGame.currentChicken.name).toBe("Jojo");
  });

  it("should not take next turn if all chickens exploded", function() {
    chicken1.hasExploded = true;
    raceGame.chickens = [chicken1]
    var result = raceGame.allChickensHaveExploded();
    expect(result).toBe(true);
   
  });

  it("returns the last rolls", function() {
    raceGame.nextTurn();
    fakeDie.nums = [1,2]
    var result = raceGame.roll();
    expect(raceGame.lastRolls).toEqual([1,2]);
  });

  it("has finish line of 40", function() {
    raceGame.nextTurn();
    expect(raceGame.finishLine).toBe(40);
  });

  it("sets winning chicken", function() {
    raceGame.nextTurn();
    chicken1.racePosition = 41;
    raceGame.checkForWinner();
    expect(raceGame.winningChicken).toBe(chicken1);
  });

  it("does not set winning chicken", function() {
    raceGame.nextTurn();
    chicken1.racePosition = 30;
    raceGame.checkForWinner();
    expect(raceGame.winningChicken).toBe(undefined);
  });

  it("should not start won", function() {
    expect(raceGame.winningChicken).toBe(undefined);
  });

  it("should be won", function() {
    raceGame.winningChicken = {};
    expect(raceGame.isWon()).toBe(true);
  });

  it("should start with no last chicken", function() {
    expect(raceGame.lastChicken).toBe(undefined);
  });

  it("should set the last chicken", function() {
    raceGame.nextTurn();
    raceGame.nextTurn();
    expect(raceGame.lastChicken).toBe(chicken1);
  });

});