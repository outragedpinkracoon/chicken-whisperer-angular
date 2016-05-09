import { Component, Input } from 'angular2/core';
import { CaptureGame } from './game/captureGame';

@Component({
  selector: 'approach',
  templateUrl: 'app/views/approach/approach.component.html',
  styleUrls: ['app/views/approach/approach.component.css']
})

export class ApproachComponent {
  @Input('game') game: CaptureGame;
  lastRoll: Array<number>;
  success: boolean;
  total: number;
  message: string;
  dieResults: Array<string>;
  
  approach(){
    this.success = this.game.approachChicken();
    this.lastRoll = this.game.lastAppoachRolls();
    this.dieResults = this.getDieResults(this.lastRoll);
    this.total = this.lastRoll.reduce( (prev, curr) => prev + curr );
  }

  getDieResults(rollsArray){
    var results = [];
    var lookup = {
      1: "\u2680",
      2: "\u2681",
      3: "\u2682",
      4: "\u2683",
      5: "\u2684",
      6: "\u2685"
    }
    for(var roll of rollsArray){
      results.push(lookup[roll]);
    }
    return results;
  }

}
