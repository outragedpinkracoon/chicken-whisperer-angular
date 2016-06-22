import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';
import {AnimalInfo} from './models/animalInfo';

@Component({
    selector: 'player-status',
    templateUrl: 'app/views/player-status/player-status.component.html',
    styleUrls: ['app/views/player-status/player-status.component.css'],
    providers: [AnimalInfo]
})

export class PlayerStatusComponent {
  @Input('game') game: CaptureGame;
<<<<<<< HEAD
  
=======

>>>>>>> explosions
  info: AnimalInfo;

  constructor(private animalInfo:AnimalInfo){
    this.info = animalInfo;
  }
}


