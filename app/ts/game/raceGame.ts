import {Player} from './player'
import {Chicken} from './chicken'

export class RaceGame {
  players: Array<Player>;
  currentChicken: Chicken;
  chickenCounter = 0;
  currentPlayer: Player;

  constructor(players : Array<Player>) {
    this.players = players;
    this.currentPlayer = this.players[0];
    this.currentChicken = players[0].chickens[0];
    this.chickenCounter = 0;
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