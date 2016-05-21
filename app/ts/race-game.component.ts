import {Component, Input} from 'angular2/core';
import {RaceGame} from './game/raceGame';
import {Chicken} from './game/chicken';
import { DiceResultsContainer } from './models/diceResultsContainer';
import { DiceResultsComponent } from './dice-results.component';

@Component({
    selector: 'race-game',
    templateUrl: 'app/views/race-game/race-game.component.html',
    styleUrls: ['app/views/race-game/race-game.component.css'],
    providers: [DiceResultsContainer],
    directives: [DiceResultsComponent]
})

export class RaceGameComponent {
  @Input('game') game: RaceGame;
  moved: boolean;

  constructor(private diceResultsContainer: DiceResultsContainer) {

  }

  roll(){
    if(this.game.isWon()) return;
    var success = this.game.roll();
    this.diceResultsContainer.setupDiceResults(this.game.lastRolls,success);
    this.game.nextTurn();
    this.moved = true;
    if(this.game.isWon()){
      var audio = new Audio('/app/assets/sounds/trumpet.wav');
      audio.play();
    }
  }

  positionPadding(chicken) {
    if(chicken.racePosition === 0) return "2%";
    var maxPadding = 100;
    var finishLine = this.game.finishLine;
    var percentage = chicken.racePosition / finishLine;
    var result = percentage * maxPadding;
    if(result > maxPadding)
      result = maxPadding;
    return result + "%";
  }

  currentChicken(chicken){
    return chicken.name === this.game.currentChicken.name
  }

  winningChicken(chicken){
    return chicken.name === this.game.winningChicken.name;
  }

}


