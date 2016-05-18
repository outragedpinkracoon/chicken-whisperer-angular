import {Component, Input} from 'angular2/core';
import {RaceGame} from './game/raceGame';
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

  constructor(private diceResultsContainer: DiceResultsContainer) {}

  roll(){
    if(this.game.isWon()) return;
    var success = this.game.roll();
    this.diceResultsContainer.setupDiceResults(this.game.lastRolls,success);
    this.game.nextTurn();
    this.moved = true;
  }
}


