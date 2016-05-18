import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';
import {Chicken} from './game/chicken';
import {DiceService} from './services/diceService'
import {DiceResults} from './models/diceResults'
import { DiceResultsComponent } from './dice-results.component';


@Component({
  selector: 'chicken-pen',
  templateUrl: 'app/views/chickens/chickens.component.html',
  styleUrls: ['app/views/chickens/chickens.component.css'],
  providers: [DiceService],
  directives: [DiceResultsComponent]
})
export class ChickensComponent extends DiceResults {
  @Input('game') game: CaptureGame;
  chicken: Chicken;

  constructor(private diceService: DiceService){}

  capture(chicken: Chicken) {
    var captureDice = this.game.approach.captureDice;
    if (captureDice == 0 || this.game.turnFinished || chicken.scare == 0) return;
    this.chicken = chicken;
    var success= this.game.attemptCapture(chicken);
    this.setupDiceResults(this.game.lastCaptureRolls(), success);
  }
}


