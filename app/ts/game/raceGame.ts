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
  winningChicken: Chicken;
  finishLine: number;
  currentPlayerIndex: number;
  winningPlayer: Player;
  lastChicken: Chicken;

  constructor(options) {
    this.players = options.players;
    this.currentPlayer = this.players[0];
    this.chickenCounter = 0;
    this.die = options.die;
    this.lastRolls = [];
    this.winningPlayer = undefined;
    this.winningChicken = undefined;
    this.finishLine = options.finishLine;
    this.currentPlayerIndex = 0;
    this.lastChicken = undefined;
  }

  updateCurrentChicken(){
    if(this.chickenCounter == this.currentPlayer.chickenCount())
    {
      this.chickenCounter = 0;
      this.updateCurrentPlayer();
    }
    this.lastChicken = this.currentChicken;
    this.currentChicken = this.currentPlayer.chickens[this.chickenCounter];
    this.chickenCounter++;
  }

  nextTurn(){
    if(this.winningChicken != undefined) return;
    this.updateCurrentChicken();
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

  isWon(){
    return this.winningChicken != undefined;
  }

  checkForWinner(){
    if(this.currentChicken.racePosition >= this.finishLine) {
      this.winningChicken = this.currentChicken;
      this.winningPlayer = this.currentPlayer;
    }
  }

  failure(){
    return false;
  }

  updateCurrentPlayer(){
    this.currentPlayerIndex++;
    if(this.currentPlayerIndex == this.players.length){
      this.currentPlayerIndex = 0;
    }
    this.currentPlayer = this.players[this.currentPlayerIndex];
  }

}