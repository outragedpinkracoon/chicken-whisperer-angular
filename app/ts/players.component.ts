import {Component, Input} from 'angular2/core';
import {Player} from './game/player';

@Component({
    selector: 'players',
    templateUrl: 'app/views/players/players.component.html'
})

export class PlayersComponent {
  @Input('players') players: Player[];
}


