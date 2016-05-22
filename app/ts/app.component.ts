import { Component } from 'angular2/core';
import { ChickensComponent } from './chickens.component';
import { CaptureGame } from './game/captureGame';
import { RaceGame } from './game/raceGame';
import { PlayersComponent } from './players.component';
import { StartComponent } from './start.component';
import { ApproachComponent } from './approach.component';
import { Die } from './game/die';
import { RaceGameComponent } from './race-game.component';
import { AnimalInfo } from './models/animalInfo';
import {GameInitializer} from './gameInitializer';
import {RaceGameInitializer} from './raceGameInitializer'

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app/app.component.html',
  styleUrls: ['app/views/app/app.component.css'],
  directives: [ChickensComponent, PlayersComponent, StartComponent, ApproachComponent, RaceGameComponent],
  providers: [AnimalInfo]
})

export class AppComponent {
  game: CaptureGame;
  raceGame: RaceGame;
  info: AnimalInfo;
  
  constructor(private animalInfo: AnimalInfo){
    this.game = GameInitializer.generateGame("Val","Chris");
    // this.raceGame = RaceGameInitializer.generateGame();
    // this.raceGame.nextTurn();
    this.info = animalInfo;
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
