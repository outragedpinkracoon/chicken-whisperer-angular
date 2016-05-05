import {Component, Input} from 'angular2/core';
import {Chicken} from './game/chicken';
import {ChickenPen} from './game/chickenPen';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'chicken-pen',
    templateUrl: 'app/views/chickens/chickens.component.html',
    styleUrls:  ['app/views/chickens/chickens.component.css']
})

export class ChickensComponent {
  @Input('chickenPen') chickenPen: ChickenPen;
  selectedChicken: Chicken;
  
  onSelect(chicken: Chicken) { 
    chicken.reduceScare();
    this.selectedChicken = chicken; 
  }
}


