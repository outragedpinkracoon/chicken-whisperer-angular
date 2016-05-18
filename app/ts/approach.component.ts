import { Component, Input } from 'angular2/core';
import { CaptureGame } from './game/captureGame';
import { DiceResults } from './models/diceResults';
import { DiceService } from './services/diceService';
import { DiceResultsComponent } from './dice-results.component';

@Component({
  selector: 'approach',
  templateUrl: 'app/views/approach/approach.component.html',
  styleUrls: ['app/views/approach/approach.component.css'],
  providers: [DiceService],
  directives: [DiceResultsComponent]
})

export class ApproachComponent extends DiceResults {
  @Input('game') game: CaptureGame;
  captureDice: Array<string>;
  
  approach(){
    var success = this.game.approachChicken();
    this.setupDiceResults(this.game.lastAppoachRolls(),success);
    this.setupCaptureDice();
  }

  setupCaptureDice(){
    this.captureDice = this.diceService.dummyDice(this.game.approach.captureDice, 6);
  }

  nextTurn(){
    this.game.nextTurn();
  }

}
