import {CaptureGame} from './game/captureGame'
import {Player} from './game/player'
import {Chicken} from './game/chicken'
import {ChickenPen} from './game/chickenPen'
import {Capture} from './game/capture'
import {Approach} from './game/approach'
import {BasicApproachStrategy} from './game/basicApproachStrategy'
import {WhispererApproachStrategy} from './game/whispererApproachStrategy'
import {Die} from './game/die'
import {WhispererChecker} from './game/whispererChecker'

export class GameInitializer {
  static generateGame(player1Name, player2Name) {
    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);

    var players = [player1, player2];

    var chickenPen = new ChickenPen([
      new Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1,
        "image":"/app/assets/images/chickens/1.png" }),
      new Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3,
        "image":"/app/assets/images/chickens/2.png" }),
      new Chicken({ "id": 3, "name": "Albert", "speed": 8, "maxScare": 3,
        "image":"/app/assets/images/chickens/3.png" }),
      new Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2,
        "image":"/app/assets/images/chickens/4.png" })
      ]);

    var strategyOptions = {
      die: new Die(),
      whispererChecker: new WhispererChecker()
    }
    var basic = new BasicApproachStrategy(strategyOptions);

    var whisperer = new WhispererApproachStrategy(strategyOptions);

    var approachOptions = {
      chickenPen: chickenPen,
      strategies: {
        "BasicApproachStrategy": basic,
        "WhispererApproachStrategy": whisperer
      }
    }

    var approach = new Approach(approachOptions);

    var captureOptions = {
      die: new Die()
    }

    var capture = new Capture(captureOptions);

    var options = {
      players: players,
      chickenPen: chickenPen,
      capture: capture,
      approach: approach
    }


    return new CaptureGame(options);

  }
}