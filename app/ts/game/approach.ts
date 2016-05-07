import {Die} from './die';
import {ChickenPen} from './chickenPen';
import {IApproachStrategy} from './iapproachStrategy';

export class Approach {
  chickenPen: ChickenPen;
  captureDice: number;
  strategies: Array<IApproachStrategy>;
  strategy: IApproachStrategy;
  lastRoll: Array<number>;
  
  constructor(options){
    this.chickenPen = options.chickenPen;
    this.captureDice = 0;
    this.strategies = options.strategies;
    this.strategy = this.strategies["BasicApproachStrategy"];
    this.lastRoll = [];
    this.firstTry = true;
  }

  step(player) : boolean{
    var result = this.strategy.approach(player);
    
    if(result == true){
      this.captureDice++;
    }
    else{
    this.chickenPen.scareChickens();
    }
    this.firstTry = false;
    return result;
  }

  setStrategy(key){
    this.strategy = this.strategies[key];
  }

  reset(){
    this.captureDice = 0;
  }
} 