import {Die} from './die';
import {ChickenPen} from './chickenPen';

export class Capture {
  chickenPen: ChickenPen;
  die: Die;
  
  constructor(options) {
    this.chickenPen = options.chickenPen;
    this.die = options.die;
  }

  attempt(player, chicken, chickenPen, captureDice){

    var rolls = this.die.rollMultiple(captureDice);
    var result;
    
    if(this.successfulRoll(rolls, chicken)) {
      result = this.success(chickenPen, player, chicken);
    } else {
      result =  this.failure(chicken)
    }

    return result;

  }

  successfulRoll(result, chicken){
    var sum = result.reduce((prev,curr) => prev + curr);
    return sum >= chicken.speed
  }

  failure(chicken){
    chicken.reduceSpeed();
    return false;
  }

  success(chickenPen, player, chicken){
    chickenPen.remove(chicken);
    player.addChicken(chicken);
    return true;
  }

}