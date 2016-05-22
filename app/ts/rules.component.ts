import {Component, Input} from 'angular2/core';
import {CaptureGame} from './game/captureGame';
import {AnimalInfo} from './models/animalInfo';

@Component({
    selector: 'rules',
    templateUrl: 'app/views/rules/rules.component.html',
    styleUrls: ['app/views/rules/rules.component.css']
})

export class RulesComponent extends AnimalInfo {
  @Input('game') game: CaptureGame;
}


