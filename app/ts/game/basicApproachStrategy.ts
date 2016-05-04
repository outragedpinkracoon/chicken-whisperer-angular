import {ApproachStrategy} from './approachStrategy';
import {NumberExtensions} from './extensions/numberextensions';
import {IApproachStrategy} from './iApproachStrategy';

export class BasicApproachStrategy extends ApproachStrategy implements IApproachStrategy {

  name(){
    return "BasicApproachStrategy";
  }
 
  public approach(player) : boolean{
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);

    var reduced = results.reduce((prev,curr) => prev +curr);
    return reduced % 2 == 0;
  }
}