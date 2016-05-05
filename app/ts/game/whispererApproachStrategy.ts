import {IApproachStrategy} from './iapproachStrategy';
import {Die} from './die';
import {WhispererChecker} from './whispererChecker';

export class WhispererApproachStrategy implements IApproachStrategy {

  approachDice: number;
  die: Die;
  name: string;
  whispererChecker: WhispererChecker;
  lastRoll: Array<number>;
  
  constructor(options){
    this.approachDice = 2;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
    this.name = "WhispererApproachStrategy";
  }
  
  public approachRoll(){
    var results = this.die.rollMultiple(this.approachDice);
    this.lastRoll = results;
    return results;
  }
  
  public approach(player) : boolean{
    var results = this.approachRoll();
    this.lastRoll = results;
    this.whispererChecker.update(results, player);
    var index = results.indexOf(1);
    return index == -1;
  }

}