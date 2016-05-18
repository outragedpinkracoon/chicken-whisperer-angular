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

}