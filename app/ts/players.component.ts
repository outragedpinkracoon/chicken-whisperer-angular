import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';

@Component({
    selector: 'players',
    templateUrl: 'app/views/players/players.component.html',
    styleUrls: ['app/views/players/players.component.css']
})

export class PlayersComponent {
  @Input('game') game: CaptureGame;
}


