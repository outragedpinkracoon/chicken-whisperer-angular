import {AnimalSetInfo} from './animalSetInfo';
export class AnimalInfo {
  game: Game;

  singular(){
    return AnimalSetInfo.singular(this.game.animalSet);
  }

  plural(){
    return this.game.animalSet;
  }

  capped(text){
    return AnimalSetInfo.capped(text);
  }
}