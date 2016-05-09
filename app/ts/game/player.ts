import {Chicken} from './chicken';

export class Player {
  chickens: Array<Chicken>;
  name: string;
  isWhisperer: boolean;
  
  constructor(name) {
    this.name = name;
    this.chickens = [];
    this.isWhisperer = false;
  }

  addChicken(chicken){
    this.chickens.push(chicken)
  }
  
  hasChickens(){
    return this.chickenCount() > 0;
  }

  chickenCount(){
    return this.chickens.length;
  }
}