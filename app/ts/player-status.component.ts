import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';

@Component({
    selector: 'player-status',
    templateUrl: 'app/views/player-status/player-status.component.html',
    styleUrls: ['app/views/player-status/player-status.component.css']
})

export class PlayerStatusComponent {
  @Input('game') game: CaptureGame;
}


