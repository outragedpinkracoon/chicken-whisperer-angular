import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';
import {AnimalInfo} from './models/animalInfo';

@Component({
    selector: 'players',
    templateUrl: 'app/views/players/players.component.html',
    styleUrls: ['app/views/players/players.component.css'],
    providers: [AnimalInfo]
})

export class PlayersComponent {
  @Input('game') game: CaptureGame;
  info: AnimalInfo;

  constructor(private animalInfo:AnimalInfo){
    this.info = animalInfo;
  }

  currentPlayer(player){
    return player.name === this.game.currentPlayer.name
  }
}


