import {Player} from './player'
import {Chicken} from './chicken'
import {Die} from './die'

export class RaceGame {
  players: Array<Player>;
  currentChicken: Chicken;
  chickenCounter = 0;
  currentPlayer: Player;
  die: Die;
  lastRolls: Array<number>;
  winner: Chicken;
  finishLine: number;

  constructor(options) {
    this.players = options.players;
    this.currentPlayer = this.players[0];
    this.currentChicken = this.players[0].chickens[0];
    this.chickenCounter = 0;
    this.die = options.die;
    this.lastRolls = [];
    this.winner = undefined;
    this.finishLine = options.finishLine;
  }

  updateCurrentChicken(){
    this.chickenCounter++;
    if(this.chickenCounter > this.currentPlayer.chickenCount())
    {
      this.chickenCounter = 0;
      this.updateCurrentPlayer();
    }
    this.currentChicken = this.currentPlayer.chickens[this.chickenCounter];
  }

  nextTurn(){
    if(this.winner != undefined) return;
    updateCurrentChicken();
  }

  roll(){
    this.lastRolls = this.die.rollMultiple(2);
    var reduced = this.lastRolls.reduce((prev,curr) => prev +curr)
    var result = (reduced % 2 == 0) ? this.success() : this.failure();
    return result; 
  }

  success(){
    this.currentChicken.move();
    this.checkForWinner();
    return true;
  }

  checkForWinner(){
    if(this.currentChicken.racePosition >= this.finishLine) {
      this.winner = this.currentChicken;
    }
  }

  failure(){
    return false;
  }

  /* Todo duplicate code from capturegame */
  updateCurrentPlayer(){
    this.currentPlayer = this.rotate(this.players)[0];
  }

  /* Todo duplicate code from capturegame */
  rotate(array){
    if(array.length === 0) return array;
    var item = array.shift();
    array.push(item);
    return array
  }


}