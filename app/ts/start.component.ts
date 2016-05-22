import { Component, Input } from 'angular2/core';
import { RulesComponent } from './rules.component';
import { AnimalFactory } from './models/animalFactory';
import { CaptureGame } from './game/captureGame';

@Component({
  selector: 'start',
  templateUrl: 'app/views/start/start.component.html',
  styleUrls:['app/views/start/start.component.css'],
  directives: [RulesComponent]
})

export class StartComponent {
  @Input('game') game: CaptureGame;

  player1Name: string;
  player2Name: string;
  animalSet: string;

  constructor(){
    this.animalSet = this.animalSets()[0];
  }

  start(){
    this.game.setPlayers([this.player1Name, this.player2Name]);
    var animalFactory = new AnimalFactory();
    var pen = animalFactory.generateSet(this.animalSet);
    this.game.setAnimals(pen);
    this.game.nextTurn();
  }

  animalSets(){
    return AnimalFactory.animalSets();
  }

  onAnimalSetChange(newSet) {
    this.animalSet = newSet;
  }
  
}
