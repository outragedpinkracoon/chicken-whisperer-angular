System.register(["./game/player", "./game/chicken", "./game/die", "./game/raceGame"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var player_1, chicken_1, die_1, raceGame_1;
    var RaceGameInitializer;
    return {
        setters:[
            function (player_1_1) {
                player_1 = player_1_1;
            },
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            },
            function (die_1_1) {
                die_1 = die_1_1;
            },
            function (raceGame_1_1) {
                raceGame_1 = raceGame_1_1;
            }],
        execute: function() {
            RaceGameInitializer = (function () {
                function RaceGameInitializer() {
                }
                RaceGameInitializer.generateGame = function () {
                    var player1;
                    var player2;
                    player1 = new player_1.Player("Valerie");
                    player2 = new player_1.Player("Jay");
                    var players = [player1, player2];
                    var chicken1 = new chicken_1.Chicken({ "id": 1, "name": "Popo", "speed": 14, "maxScare": 1, "image": "/app/assets/images/chickens/1.png" });
                    var chicken2 = new chicken_1.Chicken({ "id": 2, "name": "Pudgy", "speed": 5, "maxScare": 3, "image": "/app/assets/images/chickens/2.png" });
                    var chicken3 = new chicken_1.Chicken({ "id": 3, "name": "Jojo", "speed": 8, "maxScare": 3, "image": "/app/assets/images/chickens/3.png" });
                    var chicken4 = new chicken_1.Chicken({ "id": 4, "name": "Colin", "speed": 10, "maxScare": 2, "image": "/app/assets/images/chickens/4.png" });
                    player1.addChicken(chicken1);
                    player1.addChicken(chicken2);
                    player2.addChicken(chicken3);
                    player2.addChicken(chicken4);
                    var options = {
                        players: players,
                        die: new die_1.Die(),
                        finishLine: 40
                    };
                    return new raceGame_1.RaceGame(options);
                };
                return RaceGameInitializer;
            }());
            exports_1("RaceGameInitializer", RaceGameInitializer);
        }
    }
});
//# sourceMappingURL=raceGameInitializer.js.map