import {Chicken} from './chicken';

export class ChickenPen {
  chickens: Array<Chicken>;
  constructor(chickens){    
    this.chickens = chickens.slice();
  }

  count(){
    return this.chickens.length;
  }

  add(chicken) {
    this.chickens.push(chicken);
  }

  hasChickensForCapture(){
    for(var chicken of this.chickens)
    {
      if(chicken.scare > 0)
        return true;
    }
    return false;
  }

  refresh(){
    this.chickens.forEach(function(chicken){
      chicken.refresh();
    })
  }

  remove(chicken_out) {
    var result = [];
    for(var chicken of this.chickens)
    {
      if(chicken.id !== chicken_out.id)
        result.push(chicken);
    }
    this.chickens = result;
  }

  scareChickens(){
    this.chickens.forEach(function(chicken, index){
      chicken.reduceScare();
    });
  }


}