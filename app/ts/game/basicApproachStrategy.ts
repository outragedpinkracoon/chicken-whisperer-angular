import {ApproachStrategy} from './approachStrategy';
import {IApproachStrategy} from './iApproachStrategy';
import {Die} from './die';
import {WhispererChecker} from './whispererChecker';

export class BasicApproachStrategy  {
  
  approachDice: number;
  die: Die;
  name: string;
  whispererChecker: WhispererChecker;
  
  constructor(options){
    this.approachDice = 2;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
    this.name = "BasicApproachStrategy";
  }
  
  public approachRoll(){
    return this.die.rollMultiple(this.approachDice);
  }
  
  public approach(player) : boolean{
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);

    var reduced = results.reduce((prev,curr) => prev +curr);
    return reduced % 2 == 0;
  }
}