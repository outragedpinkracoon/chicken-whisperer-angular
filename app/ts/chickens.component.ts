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

  capture(chicken: Chicken) {
    var captureDice = this.game.approach.captureDice;
    
    if (captureDice == 0 || this.game.turnFinished) return;

    this.game.attemptCapture(chicken);
  }
}


