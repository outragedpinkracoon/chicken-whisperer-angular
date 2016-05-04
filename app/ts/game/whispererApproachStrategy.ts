import {ApproachStrategy} from './approachStrategy';
import {Die} from './die';
import {WhispererChecker} from './whispererChecker';

export class WhispererApproachStrategy {

  approachDice: number;
  die: Die;
  name: string;
  whispererChecker: WhispererChecker;
  
  constructor(options){
    this.approachDice = 2;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
    this.name = "WhispererApproachStrategy";
  }
  
  public approachRoll(){
    return this.die.rollMultiple(this.approachDice);
  }
  
  public approach(player) : boolean{
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);
    var index = results.indexOf(1);
    return index == -1;
  }

}