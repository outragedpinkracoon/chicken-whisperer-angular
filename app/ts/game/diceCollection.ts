export class DiceCollection {
  approachDice: number;
  captureDice: number;
  constructor(numberOfApproachDice = 2) {
    this.approachDice = numberOfApproachDice
    this.captureDice = 0
  }

  addCaptureDie(){
    this.captureDice++;
  }
  
}