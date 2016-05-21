import {Player} from './player'
import {Chicken} from './chicken'
import {Die} from './die'

export class RaceGame {
  players: Array<Player>;
  currentChicken: Chicken;
  chickenCounter = 0;
  die: Die;
  lastRolls: Array<number>;
  winningChicken: Chicken;
  finishLine: number;
  lastChicken: Chicken;
  chickens: Array<Chicken>;

  constructor(options) {
    this.chickenCounter = 0;
    this.die = options.die;
    this.lastRolls = [];
    this.winningPlayer = undefined;
    this.winningChicken = undefined;
    this.finishLine = options.finishLine;
    this.lastChicken = undefined;
    this.players = options.players;
    this.chickens = [];
    this.setupChickens(options.players, this.chickens);
    
  }

  setupChickens(players, chickens){
    for(var player of players){
      for(var chicken of player.chickens) {
        chicken.owner = player;
        chickens.push(chicken);
      }
    }
  }

  updateCurrentChicken(){
    if(this.chickenCounter == this.chickens.length)
    {
      this.chickenCounter = 0;
    }
    this.lastChicken = this.currentChicken;
    this.currentChicken = this.chickens[this.chickenCounter];
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
    }
  }

  failure(){
    return false;
  }

}