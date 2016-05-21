export class Chicken {
  name: string;
  speed: number;
  maxScare:number;
  maxSpeed:number;
  scare: number;
  id: number;
  racePosition: number;
  image: string;
  
  constructor(options){
    this.name = options.name;
    this.speed = options.speed;
    this.maxScare = options.maxScare;
    this.maxSpeed = options.speed;
    this.scare = options.maxScare;
    this.id = options.id;
    this.image = options.image;
    this.racePosition = 0;
  }

  reduceScare(value = 1){
    if(this.scare === 0) return;
    this.scare = this.scare - value;
  }

  increaseScare(value = 1){ 
    this.scare = this.maxScare + value;
  }

  endPhase(modifier){
    this.reduceSpeed();
    this.increaseScare(modifier);
  }

  move(){
    this.racePosition += this.speed;
  }

  reduceSpeed(value = 1){
    if(this.speed === 1) return;
    this.speed = this.speed - value;
  }

  refresh(){
    this.scare = this.maxScare
  }

  getImage(){
    if(this.scare === 0){
      var index = this.image.indexOf(".");
      var name = this.image.substring(0,index);
      var extension = this.image.substring(index, this.image.length);
      return name + "_gone"+extension;
    }
    return this.image;
  }

}