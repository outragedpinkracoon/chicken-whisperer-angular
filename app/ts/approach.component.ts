import { Component, Input } from 'angular2/core';
import { CaptureGame } from './game/captureGame';
import { DiceService } from './services/diceService';

@Component({
  selector: 'approach',
  templateUrl: 'app/views/approach/approach.component.html',
  styleUrls: ['app/views/approach/approach.component.css'],
  providers: [DiceService]
})

export class ApproachComponent {
  @Input('game') game: CaptureGame;
  lastRoll: Array<number>;
  success: boolean;
  total: number;
  message: string;
  dieResults: Array<string>;

  constructor(private diceService: DiceService) { }
  
  approach(){
    this.success = this.game.approachChicken();
    this.lastRoll = this.game.lastAppoachRolls();
    this.dieResults = this.diceService.dieResultsAsUnicode(this.lastRoll);
    this.total = this.lastRoll.reduce( (prev, curr) => prev + curr );
  }

  nextTurn(){
    this.game.nextTurn();
  }

}
