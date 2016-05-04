import {Die} from './die';
import {WhispererChecker} from './whispererChecker';

export class ApproachStrategy {
  approachDice: number;
  die: Die;
  whispererChecker: WhispererChecker;
  
  constructor(options){
    this.approachDice = 2;
    this.die = options.die;
    this.whispererChecker = options.whispererChecker;
  }
  
  public approachRoll(){
    return this.die.rollMultiple(this.approachDice);
  }
}