import { Component, Input } from 'angular2/core';
import { RulesComponent } from './rules.component';
import { CaptureGame } from './game/captureGame';

@Component({
  selector: 'start',
  templateUrl: 'app/views/start/start.component.html',
  styleUrls:['app/views/start/start.component.css'],
  directives: [RulesComponent]
})

export class StartComponent {
  @Input('game') game: CaptureGame;

  player1Name: string;
  player2Name: string;
  
  start(){
    this.game.setPlayers([this.player1Name, this.player2Name]);
    this.game.nextTurn();
  }
  
}
