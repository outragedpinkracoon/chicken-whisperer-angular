import {Component, Input} from 'angular2/core';
import {RaceGame} from './game/raceGame';
import { DiceService } from './services/diceService';
import { RacePositionsComponent } from './race-positions.component';
import { DiceResultsContainer } from './models/diceResultsContainer';

@Component({
    selector: 'race-game',
    templateUrl: 'app/views/race-game/race-game.component.html',
    providers: [DiceResultsContainer],
    styleUrls: ['app/views/race-game/race-game.component.css'],
    directives: [RacePositionsComponent]
})

export class RaceGameComponent {
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


