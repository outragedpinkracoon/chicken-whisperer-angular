import {CaptureGame} from '../captureGame'
import {Player} from '../player'
import {Chicken} from '../chicken'
import {ChickenPen} from '../chickenPen'
import {Capture} from '../capture'
import {Approach} from '../approach'
import {BasicApproachStrategy} from '../basicApproachStrategy'
import {WhispererApproachStrategy} from '../whispererApproachStrategy'
import {Die} from '../die'
import {WhispererChecker} from '../whispererChecker'

describe("Game", function() {

  var game;
  var chickenPen;

  beforeEach(function() {

    var player1 = new Player("Valerie");
    var player2 = new Player("Jay");

    var players = [player1, player2];

    chickenPen = new ChickenPen([
      new Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1 }),
      new Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 }),
      new Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 }),
      new Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2 })
    ]);
    
     var strategyOptions = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    var basic = new BasicApproachStrategy(strategyOptions);
   
    var whisperer = new WhispererApproachStrategy(strategyOptions);
    
    var approachOptions = {
      chickenPen: chickenPen,
      strategies: {
        "BasicApproachStrategy": basic,
        "WhispererApproachStrategy" : whisperer
      }
    }

    var approach = new Approach(approachOptions);

    var captureOptions = {
      die: new Die()
    }

    var capture = new Capture(captureOptions);

    var options = {
      players: players,
      chickenPen: chickenPen,
      capture: capture,
      approach: approach
    }


    game = new CaptureGame(options);

  });

  
  it("should have chicken pen", function() {
    expect(game.chickenPen).toEqual(chickenPen);
  });

  it("should have 2 players", function() {
    expect(game.playerCount()).toBe(2);
  });

  it("should have player1 as first player", function() {
    game.nextTurn();
    expect(game.currentPlayer.name).toBe("Valerie");
  });

  it("should update player", function() {
    game.updateCurrentPlayer();
    game.updateCurrentPlayer();
    expect(game.currentPlayer.name).toBe("Jay");
  });

  it("should have an approach", function() {
    expect(game.approach).not.toBe(undefined);
  });

  it("should have a capture", function() {
    expect(game.capture).not.toBe(undefined);
  });
  
  it("should set player names", function() {
    expect(game.started).toBe(false);
    game.setPlayers(["Rick", "Keith"]);
    expect(game.players[0].name).toEqual("Rick");
    expect(game.started).toBe(true);
  });

  it("should start with player 1 turn", function() {
    game.nextTurn();
    expect(game.currentPlayer.name).toBe("Valerie");
  });

  it("should reset approach", function() {
    game.approach.captureDice = 2;
    game.reset();
    expect(game.approach.captureDice).toBe(0);
  });

  it("should reset chickenPen", function() {
    spyOn(game.chickenPen,"refresh");
    game.reset();
    expect(game.chickenPen.refresh).toHaveBeenCalled();
  });

  it("should step towards chicken", function(){
    game.nextTurn();
    spyOn(game.approach,"step");
    game.approachChicken();
    expect(game.approach.step).toHaveBeenCalled();
  });

  it("should not step towards chicken if turn is finished", function(){
    game.nextTurn();
    game.chickenPen.chickens = [];
    spyOn(game.approach,"step");
    game.approachChicken();
    expect(game.approach.step).not.toHaveBeenCalled();
  });

  it("should not step towards chicken if chickenPen has no valid chickens", function(){
    chickenPen.chickens = [];
    game.nextTurn();
    spyOn(game.approach,"step");
    game.approachChicken();
    expect(game.approach.step).not.toHaveBeenCalled();
  });

  it("should attempt capture", function(){
    game.nextTurn();
    spyOn(game.capture,"attempt").and.returnValue(true);
    game.attemptCapture(null);
    expect(game.capture.attempt).toHaveBeenCalled();
  });

  it("should check for winner", function(){
    spyOn(game,"checkForWinner");
    spyOn(game.capture,"attempt").and.returnValue(true);
    game.attemptCapture(null);
    expect(game.checkForWinner).toHaveBeenCalled();
  });


  it("should not attempt capture if turn finished", function(){
    game.nextTurn();
    game.turnFinished = true;
    spyOn(game.capture,"attempt").and.returnValue(true);
    game.attemptCapture(null);
    expect(game.capture.attempt).not.toHaveBeenCalled();
  });

  it("should be game over when there are no chickens to capture", function(){
    game.chickenPen.chickens = [];
    expect(game.gameOver()).toBe(true);
  });

  it("should be the last turn", function(){
    game.chickenPen.chickens = [{}];
    expect(game.lastTurn()).toBe(true);
  });

  it("should reduce speed of last chicken each turn", function(){
    var chicken = chickenPen.chickens[0];
    chicken.speed = 10;
    game.chickenPen.chickens = [chicken];
    expect(game.lastTurn()).toBe(true);
    game.nextTurn();
    expect(chicken.speed).toBe(9);
  });

  it("should reset chickenWhisperer", function(){
    game.players[0].isWhisperer = true;
    game.resetPlayers();
    expect(game.players[0].isWhisperer).toBe(false);
    expect(game.players[1].isWhisperer).toBe(false);
  });

  it("should not swap whisperer strategy", function(){
    game.currentPlayer = {};
    game.setApproachStrategy();
    expect(game.approach.strategy.name).toBe("BasicApproachStrategy");
  });

  it("should swap whisperer strategy", function(){
    game.currentPlayer = {isWhisperer: true};
    game.setApproachStrategy();
    expect(game.approach.strategy.name).toBe("WhispererApproachStrategy");
  });

  it("should not have winner", function(){
    game.players[0].chickens = [{},{}];
    game.checkForWinner();
    expect(game.winner).toBe(undefined);
  });

  it("should not be won", function(){
    game.players[0].chickens = [{},{}];
    game.checkForWinner();
    expect(game.isWon()).toBe(false);
  });

  it("should not have winner", function(){
    game.players[0].chickens = [{},{},{},{}]
    game.checkForWinner();
    expect(game.winner).toEqual(game.players[0]);
  });

  it("should be won", function(){
    game.players[0].chickens = [{},{},{},{}]
    game.checkForWinner();
    expect(game.isWon()).toBe(true);
  });

});