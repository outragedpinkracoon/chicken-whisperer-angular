import { DiceService } from './services/diceService';
import { DiceResultsContainer } from './models/diceResultsContainer';
import { Component, Input } from 'angular2/core';

@Component({
  selector: 'dice-results',
  templateUrl: 'app/views/dice-results/dice-results.component.html',
  styleUrls: ['app/views/dice-results/dice-results.component.css']
})

export class DiceResultsComponent {
  @Input('diceResultsContainer') container: DiceResultsContainer;

}
