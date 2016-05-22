import { Injectable } from 'angular2/core';

@Injectable()
export class AnimalInfo {
  singular(animalSet){
    return animalSet.substring(0, animalSet.length - 1);
  }

  capped(animalSet){
    var first = animalSet[0];
    var chop = animalSet.substring(1, animalSet.length);
    first = first.toUpperCase();
    var result = first + chop;
    return result;
  }
}