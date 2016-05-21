import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';
import {Chicken} from './game/chicken';
import {DiceService} from './services/diceService'
import {DiceResultsContainer} from './models/diceResultsContainer'
import {DiceResultsComponent} from './dice-results.component';


@Component({
  selector: 'chicken-pen',
  templateUrl: 'app/views/chickens/chickens.component.html',
  styleUrls: ['app/views/chickens/chickens.component.css'],
  providers: [DiceResultsContainer],
  directives: [DiceResultsComponent]
})
export class ChickensComponent {
  @Input('game') game: CaptureGame;
  chicken: Chicken;

  constructor(private diceResultsContainer: DiceResultsContainer){
    this.diceResultsContainer = diceResultsContainer;
  }

  capture(chicken: Chicken) {
    if (this.captureNotPossible(chicken)) return;
    this.chicken = chicken;
    var success= this.game.attemptCapture(chicken);
    this.diceResultsContainer.setupDiceResults(this.game.lastCaptureRolls(), success);
    var sound;
    if(success) {
      sound = new Audio("/app/assets/sounds/cluck.wav");
    }
    else
    {
      sound = new Audio("/app/assets/sounds/gobble.mp3");
    }
    sound.play();
  }

  captureNotPossible(chicken){
    var captureDice = this.game.approach.captureDice;
    return captureDice == 0 || this.game.turnFinished || chicken.scare == 0
  }

  showFailure(){
    return this.game.turnFinished && !this.game.capture.attempted
  }

  showSuccess(){
    return this.game.turnFinished && this.game.capture.attempted
  }

  capturePossible(chicken){
    var dice = this.game.approach.captureDice;
    var possibleMax = dice * 6;
    return possibleMax >= chicken.speed && chicken.scare > 0;
  }
}


