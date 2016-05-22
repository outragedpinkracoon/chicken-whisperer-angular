import {ChickenPen} from '../game/chickenPen'
import {Chicken} from '../game/chicken'

export class AnimalFactory {

  names: Object;

  constructor(){
    this.names = {
      "pandas" : ["Edgar","Chester","Gerald","Binky"],
      "chickens": ["Colin","Albert","Pudgy", "Popo"]
    }
  }

  generateSet(animalSet:string){
    var names = this.names[animalSet];
    var result = this.getAnimals(animalSet,names);
    return result;
  }

  getAnimals(animalSet : string, names : Array<string>){
    var pen = this.defaultPen();
    var counter = 1;

    for(var item of pen.chickens){
      this.setImage(item, animalSet, counter);
      this.setName(item,names);
      counter++;
    }
    return pen;
  }

  setName(item: Chicken, names: Array<string>) {
    item.name = names.pop();
  }

  setImage(item: Chicken, animalSet : string, counter: number){
    var imageRoot = '/app/assets/images/'+animalSet+'/';
    var extension = ".png";
    item.image = imageRoot+counter+extension;
  }

  defaultPen(){
    return new ChickenPen([
      new Chicken({ "id": 1,"speed": 14, "maxScare": 1}),
      new Chicken({ "id": 2,"speed": 5, "maxScare": 3}),
      new Chicken({ "id": 3,"speed": 8, "maxScare": 3}),
      new Chicken({ "id": 4,"speed": 10, "maxScare": 2})
      ]);
  }
}