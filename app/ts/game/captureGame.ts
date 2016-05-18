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

  updateCurrentPlayer() {
    if(this.currentPlayer === undefined) {
      this.currentPlayer = this.players[0];
      return;
    }
    this.currentPlayer = this.rotate(this.players)[0];
  }
  
  rotate(array){
    if(array.length === 0) return array;
    var item = array.shift();
    array.push(item);
    return array
  }

  playerCount() {
    return this.players.length;
  }

  nextTurn(){
    if(this.gameOver()) return;
    if(this.turnOfEndPhase > 1) {
      this.chickenPen.chickens[0].reduceSpeed();
      this.chickenPen.chickens[0].increaseScare();
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
      this.turnOfEndPhase++ ;
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