import {ChickenPen} from '../../game/chickenPen';
import {Chicken} from '../../game/chicken';
import {Injectable} from 'angular2/core';

@Injectable()
export class ChickenService {
  getChickens() {
    return Promise.resolve(new ChickenPen([
      new Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1 }),
      new Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3 }),
      new Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3 }),
      new Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2 })
    ]));

  }

  getChicken(id: number) {
    return Promise.resolve(this.getChickens()).then(
      chickenPen => chickenPen.chickens.filter(chicken => chicken.id === id)[0]
    );
  }
}