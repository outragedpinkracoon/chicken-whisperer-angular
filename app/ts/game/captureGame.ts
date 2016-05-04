import {ArrayExtensions} from './extensions/arrayextensions';
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
  finished:boolean;
  currentPlayer: Player;
  
  constructor(options) {
    this.players = options.players;
    this.chickenPen = options.chickenPen;
    this.capture = options.capture;
    this.approach = options.approach;
    this.finished = false;
  }

  reset(){
    this.chickenPen.refresh();
    this.approach.reset();
    this.finished = false;
    this.resetPlayers();
  }

  resetPlayers(){
    this.players.forEach(function(player, index){
      player.isWhisperer = false;
    });
  }

  updateCurrentPlayer() {
    if(this.currentPlayer === undefined) {
      this.currentPlayer = this.players[0];
      return;
    }
    this.currentPlayer = ArrayExtensions.rotate(this.players)[0];
  }

  playerCount() {
    return this.players.length;
  }

  nextTurn(){
    if(this.lastTurn()) {
      this.chickenPen.chickens[0].reduceSpeed();
    }
    this.updateCurrentPlayer();
    this.reset();
  }

  gameOver(){
    return !this.chickenPen.hasChickensForCapture();
  }

  lastTurn(){
    return this.chickenPen.count() == 1;
  }

  approachChicken(){
    this.setApproachStrategy();
    if(this.finished || this.gameOver()) return;
      this.approach.step(this.currentPlayer);
  }

  setApproachStrategy(){
    if(this.currentPlayer.isWhisperer){
      this.approach.setStrategy("WhispererApproachStrategy");
    } else {
      this.approach.setStrategy("BasicApproachStrategy");
    }
  }

  attemptCapture(chicken){
    if(this.finished) return;
    this.capture.attempt(this.currentPlayer, 
                         chicken, 
                         this.chickenPen, 
                         this.approach.captureDice);
    this.finished = true;

  }

}