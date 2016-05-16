import {Player} from './player'
import {Chicken} from './chicken'
import {Die} from './die'

export class RaceGame {
  players: Array<Player>;
  currentChicken: Chicken;
  chickenCounter = 0;
  currentPlayer: Player;
  die: Die;

  constructor(players : Array<Player>, die: Die) {
    this.players = players;
    this.currentPlayer = this.players[0];
    this.currentChicken = players[0].chickens[0];
    this.chickenCounter = 0;
    this.die = die;
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

  roll(){
    var roll = this.die.rollAndReduce(2);
    var result = (roll % 2 == 0) ? this.success() : this.failure();
    return result;  
  }

  success(){
    return true;
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