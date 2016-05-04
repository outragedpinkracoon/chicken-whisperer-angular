export class WhispererChecker {

  update(rolls, player) {
    if(this.gainsWhisperer(rolls)) {
      player.isWhisperer = true
    }

    if(this.losesWhisperer(rolls)){
      player.isWhisperer = false;
      
    }
  }

  gainsWhisperer(rolls){
    return rolls[0] == rolls[1];
  }

  losesWhisperer(rolls) {
    return rolls.indexOf(1) > -1;
  }
}