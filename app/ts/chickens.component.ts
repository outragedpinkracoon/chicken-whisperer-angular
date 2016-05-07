import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';


@Component({
    selector: 'chicken-pen',
    templateUrl: 'app/views/chickens/chickens.component.html'
})

export class ChickensComponent {
  @Input('game') game: CaptureGame;

  capture(chicken: Chicken){
    var player = this.game.currentPlayer;
    var pen = this.game.chickenPen;
    var captureDice = this.game.approach.captureDice;
    
    this.game.capture.attempt(player, chicken, pen, captureDice);
  }
}


