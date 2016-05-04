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

  chickenCount(){
    return this.chickens.length;
  }
}