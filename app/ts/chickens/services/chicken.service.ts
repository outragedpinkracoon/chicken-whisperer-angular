import {CHICKENS} from '../data/mock-chickens';
import {Injectable} from 'angular2/core';

@Injectable()
export class ChickenService {
  getChickens() {
    return Promise.resolve(CHICKENS);
  }
  
  getChicken(id: number) {
    return Promise.resolve(CHICKENS).then(
      chickens => chickens.filter(chicken => chicken.id === id)[0]
    );
  }
}