import { Component } from 'angular2/core';
import { ChickensComponent } from './chickens.component';
import { CaptureGame } from './game/captureGame';
import { PlayersComponent } from './players.component';
import { StartComponent } from './start.component';
import {GameInitializer} from './gameInitializer';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app/app.component.html',
  styleUrls: ['app/views/app/app.component.css'],
  directives: [ChickensComponent, PlayersComponent, StartComponent],
})

export class AppComponent {
  title = 'Chicken Whisperer';
  game: CaptureGame;
  lastRoll: Array<number>;
  success: boolean;
    
  constructor(){
    this.game = GameInitializer.generateGame("Val","Jay");
    this.game.nextTurn();
  }
  
  approach(){
    this.success = this.game.approach.step(this.game.currentPlayer);
    this.lastRoll = this.game.approach.strategy.lastRolls();
  }
 
}
