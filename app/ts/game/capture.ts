import {Die} from './die';

export class Capture {
  die: Die;
  lastRolls: Array<number>;
  attempted: boolean;
  
  constructor(options) {
    this.die = options.die;
  }
  
  reset(){
    this.lastRolls = [];
    this.attempted = false;
  }
  
  attempt(player, chicken, chickenPen, captureDice){
    this.attempted = true;
    this.lastRolls = this.die.rollMultiple(captureDice);

    var result;
    
    if(this.successfulRoll(this.lastRolls, chicken)) {
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