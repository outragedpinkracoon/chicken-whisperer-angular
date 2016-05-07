import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';

@Component({
    selector: 'players',
    templateUrl: 'app/views/players/players.component.html'
})

export class PlayersComponent {
  @Input('game') game: CaptureGame;
}


