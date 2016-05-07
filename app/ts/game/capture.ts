import {Die} from './die';

export class Capture {
  die: Die;
  lastRolls: Array<number>;
  capturedChicken: boolean;
  
  constructor(options) {
    this.die = options.die;
  }
  
  reset(){
    this.lastRolls = [];
    this.capturedChicken = false;
  }
  
  attempt(player, chicken, chickenPen, captureDice){

    this.lastRolls = this.die.rollMultiple(captureDice);

    var result;
    
    if(this.successfulRoll(this.lastRolls, chicken)) {
      result = this.success(chickenPen, player, chicken);
      this.capturedChicken = true;
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