import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';
import {Chicken} from './game/chicken';


@Component({
  selector: 'chicken-pen',
  templateUrl: 'app/views/chickens/chickens.component.html',
  styleUrls: ['app/views/chickens/chickens.component.css']
})

export class ChickensComponent {
  @Input('game') game: CaptureGame;
  success: boolean;
  lastRolls: Array<number>;
  total: number;
  message: string;

  capture(chicken: Chicken) {
    var captureDice = this.game.approach.captureDice;
    if (captureDice == 0 || this.game.turnFinished) return;

    var result = this.game.attemptCapture(chicken);
    this.setupFeedback(result, chicken);
  }
  
  setupFeedback(result, chicken){
    this.lastRolls = this.game.lastCaptureRolls();
    this.total = this.lastRolls.reduce( (prev, curr) => prev + curr );
    var subMessage = result ? "successfully captured " : "failed to capture ";
    this.message = "You "+subMessage+ chicken.name;
  }
}


