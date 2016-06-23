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
  gameOver: boolean;
  rollSequence: Array<Array<number>>;
  rollIndex: number;

  constructor(options) {
    this.chickenCounter = 0;
    this.die = options.die;
    this.lastRolls = [];
    this.winningChicken = undefined;
    this.finishLine = options.finishLine;
    this.lastChicken = undefined;
    this.players = options.players;
    this.chickens = [];
    this.setupChickens(options.players, this.chickens);
    this.rollSequence = [[1,1],[2,2]]
    this.rollIndex = 0;
    this.gameOver = false;
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
    if(this.allChickensHaveExploded()) return false;

    if(this.chickenCounter == this.chickens.length) this.chickenCounter = 0;

    this.lastChicken = this.currentChicken;

    var nextChicken = this.chickens[this.chickenCounter];

    if(nextChicken.hasExploded) {
      this.chickenCounter++;
      return this.updateCurrentChicken();
    }

    this.currentChicken = nextChicken;
    this.chickenCounter++;
  }

  allChickensHaveExploded(){
    var intact = this.chickens.filter(function(c) { return !c.hasExploded; });
    if(intact.length == 0) {
      this.gameOver = true;
      return true;
    }
    return false;
  }

  nextTurn(){
    if(this.winningChicken != undefined || this.gameOver) return;
    this.updateCurrentChicken();
  }

  roll(){
    if(this.gameOver) return;
    //this.lastRolls = this.die.rollMultiple(2);
    //keep for dice simulation
    this.lastRolls = this.rollSequence[this.rollIndex];
    this.rollIndex++;
    if(this.rollIndex > this.rollSequence.length - 1) this.rollIndex = 0;
    var result = (this.calculateSuccess()) ? this.success() : this.failure();
    return result; 
  }

  rolledDoubleOne(){
    return this.lastRolls[0] == 1 && this.lastRolls[1] == 1;
  }

  rolledTooHigh(rollResult){
    return rollResult - this.currentChicken.speed >= 22;
  }

  calculateSuccess(){
    var reduced = this.lastRolls.reduce((prev,curr) => prev +curr);

    if(this.rolledDoubleOne() || this.rolledTooHigh(reduced)) {
      this.currentChicken.explode();
      return false;
    }
  
    return reduced % 2 == 0
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