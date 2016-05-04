import {ApproachStrategy} from './approachStrategy';

export class WhispererApproachStrategy extends ApproachStrategy {

  name(){
    return "WhispererApproachStrategy";
  }

  public approach(player) : boolean{
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);
    var index = results.indexOf(1);
    return index == -1;
  }

}