import { Component, Input } from 'angular2/core';
import { CaptureGame } from './game/captureGame';

@Component({
  selector: 'approach',
  templateUrl: 'app/views/approach/approach.component.html'
})

export class ApproachComponent {
  @Input('game') game: CaptureGame;
  lastRoll: Array<number>;
  success: boolean;
  total: number;
  message: string;
  
  approach(){
    this.success = this.game.approachChicken();
    this.message = this.success ? "Success!" : "Failure"
    this.lastRoll = this.game.lastAppoachRolls();
    this.total = this.lastRoll.reduce( (prev, curr) => prev + curr );
  }
  
  nextTurn(){
      this.game.nextTurn();
  }

}
