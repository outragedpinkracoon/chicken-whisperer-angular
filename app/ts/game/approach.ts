import {DiceCollection} from './diceCollection';
import {Die} from './die';
import {ChickenPen} from './chickenPen';
import {ApproachStrategy} from './approachStrategy';

export class Approach {
  chickenPen: ChickenPen;
  captureDice: number;
  strategies: Array<ApproachStrategy>;
  strategy: ApproachStrategy;
  
  constructor(options){
    this.chickenPen = options.chickenPen;
    this.captureDice = 0;
    this.strategies = options.strategies;
    this.strategy = this.strategies["basic"];
  }

  step(player){
    var result = this.strategy.approach(player);

    if(result == true){
      this.captureDice++;
    }
    this.chickenPen.scareChickens();
  }

  setStrategy(key){
    this.strategy = this.strategies[key];
  }

  reset(){
    this.captureDice = 0;
  }
} 