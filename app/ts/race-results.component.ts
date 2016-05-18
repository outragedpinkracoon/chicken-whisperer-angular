import {Component, Input} from 'angular2/core';
import {RaceGame} from './game/raceGame';
import { DiceResultsContainer } from './models/diceResultsContainer';

@Component({
    selector: 'race-results',
    templateUrl: 'app/views/race-results/race-results.component.html',
    styleUrls: ['app/views/race-results/race-results.component.css'],
    providers: [DiceResultsContainer]
})

export class RaceResultsComponent {
  @Input('game') game: RaceGame;
  success: boolean;
  diceResults: Array<string>;
  total:number;
  moved: boolean;

  constructor(private diceResultsContainer: DiceResultsContainer) {
    this.diceResultsContainer = diceResultsContainer;
  }

  roll(){
    if(this.game.isWon()) return;
    this.success = this.game.roll();
    this.diceResultsContainer.setupDiceResults(this.game.lastRolls,this.success);
    
    this.game.nextTurn();
    this.moved = true;
  }
}


