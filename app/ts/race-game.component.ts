import {Component, Input} from 'angular2/core';
import {RaceGame} from './game/raceGame';
import { RacePositionsComponent } from './race-positions.component';
import { RaceResultsComponent } from './race-results.component';

@Component({
    selector: 'race-game',
    templateUrl: 'app/views/race-game/race-game.component.html',
    styleUrls: ['app/views/race-game/race-game.component.css'],
    directives: [RacePositionsComponent, RaceResultsComponent]
})

export class RaceGameComponent {
  @Input('game') game: RaceGame;
}


