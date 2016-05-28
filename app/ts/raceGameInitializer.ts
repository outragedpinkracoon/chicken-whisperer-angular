import {Player}  from "./game/player"
import {Chicken}  from "./game/chicken"
import {Die}  from "./game/die"
import {RaceGame}  from "./game/raceGame"

export class RaceGameInitializer {
  static generateGame() {

    var player1;
    var player2;

    player1 = new Player("Valerie");
    player2 = new Player("Jay");

    var players = [player1, player2];

    var chicken1 = new Chicken({"id": 1, "name": "Popo", "speed": 14, "maxScare": 1, "image":"/app/assets/images/chickens/1.png" });
    var chicken2 = new Chicken({"id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3, "image":"/app/assets/images/chickens/2.png" });
    var chicken3 = new Chicken({"id": 3, "name": "Jojo", "speed": 8, "maxScare": 3, "image":"/app/assets/images/chickens/3.png" });
    var chicken4 = new Chicken({"id": 4, "name": "Colin", "speed": 10, "maxScare": 2, "image":"/app/assets/images/chickens/4.png" });

    player1.addChicken(chicken1);
    player1.addChicken(chicken2);
    player2.addChicken(chicken3);
    player2.addChicken(chicken4);

    var die = new Die();
    die.roll = function(){
      return 1;
    }

    var options = {
      players: players,
      die: die,
      finishLine: 40
    }

    return new RaceGame(options);
  }

}