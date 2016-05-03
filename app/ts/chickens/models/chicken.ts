export class Chicken {
  name: string;
  speed: number;
  maxScare:number;
  maxSpeed:number;
  scare: number;
  id: number;
  
  constructor(options){
    this.name = options.name;
    this.speed = options.speed;
    this.maxScare = options.maxScare;
    this.maxSpeed = options.speed;
    this.scare = options.maxScare;
  }

  reduceScare(value = 1){
    if(this.scare === 0) return;
    this.scare = this.scare - value;
  }

  reduceSpeed(value = 1){
    if(this.speed === 0) return;
    this.speed = this.speed - value;
  }

  refresh(){
    this.scare = this.maxScare
  }

}