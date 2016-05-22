export abstract class AnimalSetInfo {
  
  static singular(animalSet){
    return animalSet.substring(0, animalSet.length - 1);
  }

  static capped(animalSet){
    var first = animalSet[0];
    var chop = animalSet.substring(1, animalSet.length);
    first = first.toUpperCase();
    var result = first + chop;
    return result;
  }
}