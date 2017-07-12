# Chicken Whisperer 

Originally a physical board game designed by myself and Jay Chetty, this is the angular 2 implementation.

![Screenshot](screenshot.png?raw=true "Screenshot")

http://awake-yarn.surge.sh/

## Rules

### Approaching
You catch chickens by approaching them, quietly!

A chicken has a name, a scare value and a speed value. Scare is the number of times you can frighten it before it runs away that turn and cannot be caught. Speed is the value you need to roll to capture the chicken, and also how fast it is in the race phase!

Each turn you will roll two dice. On an odd roll, you scare the chickens and each one loses 1 point of scare value. When a chickens scare value is 0, it can no longer be caught that turn. If you roll too many odd values and all the chickens have run away, your turn is over.

### Capturing
On an even roll, you successfully approach the chickens and gain a "capture dice". When you are ready, you can click on a chicken to attempt to catch it! All your capture dice are rolled at once and the total is calculated from adding the results.

If your total is equal to or higher than the chickens speed then you successfully capture the chicken!</p>

### Winning
If one player captures all the chickens, they win automatically and the game is over. Otherwise, the race phase begins! </p>
  
Each turn, a player will roll 2 dice. On an even roll, the current chicken moves it's speed toward the finish line. On an odd roll, it does nothing. The first person whose chicken reaches the finish line wins!
