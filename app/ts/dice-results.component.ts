import { DiceService } from './services/diceService';
import { Component, Input } from 'angular2/core';

@Component({
  selector: 'dice-results',
  templateUrl: 'app/views/dice-results/dice-results.component.html',
  styleUrls: ['app/views/dice-results/dice-results.component.css'],
  providers: [DiceService]
})

export class DiceResultsComponent {
  @Input('lastRolls') lastRolls: Array<number>;
  @Input('success') success: boolean;
  @Input('diceResults') diceResults: Array<string>;
  @Input('total') total: number;

  constructor(private diceService: DiceService) { 
  }

}
