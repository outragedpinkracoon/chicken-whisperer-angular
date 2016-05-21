import { Component } from 'angular2/core';
import { ChickensComponent } from './chickens.component';
import { CaptureGame } from './game/captureGame';
import { RaceGame } from './game/raceGame';
import { PlayersComponent } from './players.component';
import { StartComponent } from './start.component';
import { ApproachComponent } from './approach.component';
import { Die } from './game/die';
import { RaceGameComponent } from './race-game.component';
import {GameInitializer} from './gameInitializer';
import {RaceGameInitializer} from './raceGameInitializer'

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app/app.component.html',
  styleUrls: ['app/views/app/app.component.css'],
  directives: [ChickensComponent, PlayersComponent, StartComponent, ApproachComponent, RaceGameComponent]
})

export class AppComponent {
  title = 'Chicken Whisperer';
  game: CaptureGame;
  raceGame: RaceGame;
  
  constructor(){
    this.game = GameInitializer.generateGame("Val","Chris");
    //this.game.nextTurn();
    // this.raceGame = RaceGameInitializer.generateGame();
    // this.raceGame.nextTurn();
  }

  startRace(){
    if(this.game.isWon()) return;

    var options = {
      players: this.game.players,
      die: new Die(),
      finishLine: 40
    }

    this.raceGame = new RaceGame(options);
    this.raceGame.nextTurn();
  }

  startRacePossible(){
    return this.game.gameOver() && !this.raceGame && !this.game.isWon()
  }
}
