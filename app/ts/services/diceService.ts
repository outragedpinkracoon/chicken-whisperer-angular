import { Injectable } from 'angular2/core';

@Injectable()
export class DiceService {
  
  dieResultsAsUnicode(rollsArray){
    var results = [];
    
    for(var roll of rollsArray){
      results.push(this.dieUnicode(roll));
    }
    return results;
  }

  dieUnicode(roll){
    var lookup = {
      1: "\u2680",
      2: "\u2681",
      3: "\u2682",
      4: "\u2683",
      5: "\u2684",
      6: "\u2685"
    }
    return lookup[roll];
  }
}