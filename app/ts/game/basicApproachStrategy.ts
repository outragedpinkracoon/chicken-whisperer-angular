import {IApproachStrategy} from './iApproachStrategy';
import {Die} from './die';
import {WhispererChecker} from './whispererChecker';

export class BasicApproachStrategy implements IApproachStrategy  {
  
  approachDice: number;
  die: Die;
  name: string;
  whispererChecker: WhispererChecker;
  lastRoll: Array<number>;
  
  constructor(options){
    this.approachDice = 2;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
    this.name = "BasicApproachStrategy";
    this.lastRoll = [];
  }
  
  public approachRoll(){
    var results =  this.die.rollMultiple(this.approachDice);
    this.lastRoll = results;
    return results;
  }
  
  public lastRolls() {
    return this.lastRoll;
  }
  
  public approach(player) : boolean{
    var results = this.approachRoll();
    this.whispererChecker.update(results, player);

    var reduced = results.reduce((prev,curr) => prev +curr);
    return reduced % 2 == 0;
  }
}