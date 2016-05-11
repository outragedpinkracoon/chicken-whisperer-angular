export class WhispererChecker {

  update(rolls, player) {
    if(player.isWhisperer && this.losesWhisperer(rolls)){
      return player.isWhisperer = false;
    }
    
    if(this.gainsWhisperer(rolls)) {
      return player.isWhisperer = true
    }
    
  }

  gainsWhisperer(rolls){
    return rolls[0] == rolls[1];
  }

  losesWhisperer(rolls) {
    return rolls.indexOf(1) > -1;
  }
}