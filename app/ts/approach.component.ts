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
  
  approach(){
    this.success = this.game.approach.step(this.game.currentPlayer);
    this.lastRoll = this.game.approach.strategy.lastRolls();
    this.total = this.lastRoll.reduce( (prev, curr) => prev + curr );
 
  }
 
}
