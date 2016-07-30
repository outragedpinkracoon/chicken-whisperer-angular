import {Die} from './die';
import {Approach} from './approach';
import {Capture} from "./capture";
import {Player} from "./player";
import {ChickenPen} from "./chickenPen";
import {BasicApproachStrategy} from "./basicApproachStrategy";
import {WhispererApproachStrategy} from "./whispererApproachStrategy";

export class CaptureGame {
    
  players: Array<Player>;
  chickenPen: ChickenPen;
  capture: Capture;
  approach: Approach;
  currentPlayer: Player;
  started: boolean;
  turnFinished: boolean;
  chickensToCapture: number;
  winner: Player;
  animalSet: string;
  turnOfEndPhase: number;

  constructor(options) {
     this.players = options.players;
     this.chickenPen = options.chickenPen;
     this.capture = options.capture;
     this.approach = options.approach;
     this.turnFinished = false;
     this.started = false;
     this.chickensToCapture = this.chickenPen.chickens.slice(0).length;
     this.winner = undefined;
     this.turnOfEndPhase = 0;
     this.animalSet = "chickens";
  }

  reset(){
    if(this.turnOfEndPhase <= 1) {
      this.chickenPen.refresh();
    }
    this.approach.reset();
    this.capture.reset();
    this.started = true;
    this.turnFinished = false;
    this.resetPlayers();
  }

  resetPlayers(){
    for(var player of this.players){
      player.isWhisperer = false;
    }
  }
  
  setPlayers(playerNames) {
    this.players = [];
    for(var name of playerNames) {
      this.players.push(new Player(name));
    }
    this.started = true;
  }

  setAnimals(pen, animalSet){
    this.chickenPen = pen;
    this.approach.chickenPen = pen;
    this.animalSet = animalSet;
  }

  updateCurrentPlayer() {
    if(this.currentPlayer === undefined) {
      this.currentPlayer = this.players[0];
      return;
    }
    this.currentPlayer = this.rotate(this.players)[0];
  }

  captureNotPossible(chicken){
    var captureDice = this.approach.captureDice;
    return captureDice == 0 || this.turnFinished || chicken.scare == 0
  }
  
  rotate(array){
    if(array.length === 0) return array;
    var item = array.shift();
    array.push(item);
    return array
  }

  capturePossible(chicken){
    var dice = this.approach.captureDice;
    var possibleMax = dice * 6;
    return possibleMax >= chicken.speed && chicken.scare > 0;
  }

  playerCount() {
    return this.players.length;
  }

  nextTurn(){
    if(this.gameOver()) return;
    this.endPhase();
    if(this.turnOfEndPhase > 1) {
      this.chickenPen.chickens[0].endPhase(this.turnOfEndPhase - 1);
    }
    this.updateCurrentPlayer();
    this.reset();
  }

  gameOver(){
    return this.chickenPen.count() == 0;
  }

  checkForWinner(){
    for(var player of this.players){
      if(player.chickenCount() == this.chickensToCapture)
        this.winner = player;
    }
  }

  endPhase(){
    var result = this.chickenPen.count() == 1;
    if(result){
      this.turnOfEndPhase++;
    }
    return result;
  }

  approachChicken(){
    if(this.gameOver()) return;
    this.setApproachStrategy();
    var result =  this.approach.step(this.currentPlayer);
    if(!this.chickenPen.hasChickensForCapture())
    {
      this.turnFinished = true;
    }
    return result;
  }
 
  isWon(){
    return this.winner != undefined;
  }

  lastAppoachRolls(){
    return this.approach.strategy.lastRolls();
  }
  
  lastCaptureRolls(){
    return this.capture.lastRolls;
  }

  setApproachStrategy(){
    if(this.currentPlayer.isWhisperer){
      this.approach.setStrategy("WhispererApproachStrategy");
    } else {
      this.approach.setStrategy("BasicApproachStrategy");
    }
  }

  attemptCapture(chicken){
    if(this.turnFinished) return;
    this.turnFinished = true;
    var result = this.capture.attempt(this.currentPlayer, 
                         chicken, 
                         this.chickenPen, 
                         this.approach.captureDice);
    this.checkForWinner();
    return result;

  }

}