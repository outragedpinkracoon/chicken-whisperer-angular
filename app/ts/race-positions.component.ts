import {Component, Input} from 'angular2/core';
import {RaceGame} from './game/raceGame';

@Component({
    selector: 'race-positions',
    templateUrl: 'app/views/race-positions/race-positions.component.html',
    styleUrls: ['app/views/race-positions/race-positions.component.css']
})

export class RacePositionsComponent {
  @Input('game') game: RaceGame;
}


