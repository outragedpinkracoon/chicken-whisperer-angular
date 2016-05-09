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
  diceResults: Array<string>;
  sixSidedDie: string;
  captureDice: Array<string>;

  constructor(private diceService: DiceService) { 
    this.sixSidedDie = diceService.sixSidedDie;
  }
  
  approach(){
    this.success = this.game.approachChicken();
    this.lastRoll = this.game.lastAppoachRolls();
    this.diceResults = this.diceService.dieResultsAsUnicode(this.lastRoll);
    this.total = this.lastRoll.reduce( (prev, curr) => prev + curr );

    this.setupCaptureDice();
    
  }

  setupCaptureDice(){
    this.captureDice = this.diceService.dummyDice(this.game.approach.captureDice, 6);
  }

  nextTurn(){
    this.game.nextTurn();
  }

}
