import { Component, Input } from 'angular2/core';
import { CaptureGame } from './game/captureGame';
import { DiceResultsContainer } from './models/diceResultsContainer';
import { DiceService } from './services/diceService';
import { DiceResultsComponent } from './dice-results.component';
import { PlayerStatusComponent } from './player-status.component';

@Component({
  selector: 'approach',
  templateUrl: 'app/views/approach/approach.component.html',
  styleUrls: ['app/views/approach/approach.component.css'],
  providers: [DiceService, DiceResultsContainer],
  directives: [DiceResultsComponent, PlayerStatusComponent]
})

export class ApproachComponent {
  @Input('game') game: CaptureGame;
  captureDice: Array<string>;
  
  constructor(private diceResultsContainer: DiceResultsContainer, private diceService: DiceService){
    this.diceResultsContainer = diceResultsContainer;
    this.diceService = diceService
  }

  approach(){
    var success = this.game.approachChicken();
    this.diceResultsContainer.setupDiceResults(this.game.lastAppoachRolls(),success);
    this.setupCaptureDice();
  }

  setupCaptureDice(){
    this.captureDice = this.diceService.dummyDice(this.game.approach.captureDice, 6);
  }

  nextTurn(){
    this.game.nextTurn();
  }

}
