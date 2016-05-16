import {Component, Input} from 'angular2/core';
import {RaceGame} from './game/raceGame';
import { DiceService } from './services/diceService';

@Component({
    selector: 'race-game',
    templateUrl: 'app/views/race-game/race-game.component.html',
    providers: [DiceService]
})

export class RaceGameComponent {
  @Input('game') game: RaceGame;
  success: boolean;
  diceResults: Array<string>;

  constructor(private diceService: DiceService) { }

  roll(){
    this.success = this.game.roll();
    this.diceResults = this.diceService.dieResultsAsUnicode(this.game.lastRolls);
    this.total = this.game.lastRolls.reduce( (prev, curr) => prev + curr );
    this.game.nextTurn();
  }
}


