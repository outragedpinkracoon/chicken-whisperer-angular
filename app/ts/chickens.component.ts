import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';

@Component({
    selector: 'chicken-pen',
    templateUrl: 'app/views/chickens/chickens.component.html',
    styleUrls:  ['app/views/chickens/chickens.component.css']
})

export class ChickensComponent {
  @Input('game') game: captureGame;
  
  capture(chicken: Chicken) { 
   
  }
}


