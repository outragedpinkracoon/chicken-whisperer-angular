System.register(['./game/captureGame', './game/player', './game/chicken', './game/chickenPen', './game/capture', './game/approach', './game/basicApproachStrategy', './game/whispererApproachStrategy', './game/die', './game/whispererChecker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var captureGame_1, player_1, chicken_1, chickenPen_1, capture_1, approach_1, basicApproachStrategy_1, whispererApproachStrategy_1, die_1, whispererChecker_1;
    var GameInitializer;
    return {
        setters:[
            function (captureGame_1_1) {
                captureGame_1 = captureGame_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            },
            function (chicken_1_1) {
                chicken_1 = chicken_1_1;
            },
            function (chickenPen_1_1) {
                chickenPen_1 = chickenPen_1_1;
            },
            function (capture_1_1) {
                capture_1 = capture_1_1;
            },
            function (approach_1_1) {
                approach_1 = approach_1_1;
            },
            function (basicApproachStrategy_1_1) {
                basicApproachStrategy_1 = basicApproachStrategy_1_1;
            },
            function (whispererApproachStrategy_1_1) {
                whispererApproachStrategy_1 = whispererApproachStrategy_1_1;
            },
            function (die_1_1) {
                die_1 = die_1_1;
            },
            function (whispererChecker_1_1) {
                whispererChecker_1 = whispererChecker_1_1;
            }],
        execute: function() {
            GameInitializer = (function () {
                function GameInitializer() {
                }
                GameInitializer.generateGame = function (player1Name, player2Name) {
                    var player1 = new player_1.Player(player1Name);
                    var player2 = new player_1.Player(player2Name);
                    var players = [player1, player2];
                    var chickenPen = new chickenPen_1.ChickenPen([
                        new chicken_1.Chicken({ "id": 1, "name": "Popo", "speed": 1, "maxScare": 11,
                            "image": "http://askmaryrd.com/wp-content/uploads/2014/05/Ninja-Chicken.png" }),
                        new chicken_1.Chicken({ "id": 2, "name": "Pudgy", "speed": 1, "maxScare": 13,
                            "image": "https://ess.ualberta.ca/wp-content/uploads/2012/09/cartoon-chicken-md.png" }),
                        new chicken_1.Chicken({ "id": 3, "name": "Jojo", "speed": 1, "maxScare": 13,
                            "image": "http://www.wpclipart.com/cartoon/animals/bird/chicken/leery_chicken_T.png" }),
                        new chicken_1.Chicken({ "id": 4, "name": "Colin", "speed": 1, "maxScare": 12,
                            "image": "http://www.wpclipart.com/cartoon/animals/bird/chicken/Chicken_cartoon_04.svg" })
                    ]);
                    var strategyOptions = {
                        die: new die_1.Die(),
                        whispererChecker: new whispererChecker_1.WhispererChecker()
                    };
                    var basic = new basicApproachStrategy_1.BasicApproachStrategy(strategyOptions);
                    var whisperer = new whispererApproachStrategy_1.WhispererApproachStrategy(strategyOptions);
                    var approachOptions = {
                        chickenPen: chickenPen,
                        strategies: {
                            "BasicApproachStrategy": basic,
                            "WhispererApproachStrategy": whisperer
                        }
                    };
                    var approach = new approach_1.Approach(approachOptions);
                    var captureOptions = {
                        die: new die_1.Die()
                    };
                    var capture = new capture_1.Capture(captureOptions);
                    var options = {
                        players: players,
                        chickenPen: chickenPen,
                        capture: capture,
                        approach: approach
                    };
                    return new captureGame_1.CaptureGame(options);
                };
                return GameInitializer;
            }());
            exports_1("GameInitializer", GameInitializer);
        }
    }
});
//# sourceMappingURL=gameInitializer.js.map