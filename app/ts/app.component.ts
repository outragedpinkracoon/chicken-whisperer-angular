import { Component } from 'angular2/core';
import { ChickensComponent } from './chickens.component';
import { CaptureGame } from './game/captureGame';
import { PlayersComponent } from './players.component';
import { StartComponent } from './start.component';
import { ApproachComponent } from './approach.component';
import { RaceGameComponent } from './raceGame.component';
import {GameInitializer} from './gameInitializer';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app/app.component.html',
  styleUrls: ['app/views/app/app.component.css'],
  directives: [ChickensComponent, PlayersComponent, StartComponent, ApproachComponent, RaceGameComponent]
})

export class AppComponent {
  title = 'Chicken Whisperer';
  game: CaptureGame;
  
  constructor(){
    this.game = GameInitializer.generateGame("Val","Chris");
    this.game.chickenPen.chickens = [];
    this.game.nextTurn();
  }
}
