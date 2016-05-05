import {Component, Input} from 'angular2/core';
import {Chicken} from '../game/chicken';
import {ChickenPen} from '../game/chickenPen';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { ChickenService } from './services/chicken.service';

@Component({
    selector: 'chicken-pen',
    templateUrl: 'app/chickens/chickens.component.html',
    styleUrls:  ['app/chickens/chickens.component.css']
})

export class ChickensComponent {
  @Input('chickenPen') chickenPen: ChickenPen;
  selectedChicken: Chicken;
  
  constructor(
    private _chickenService: ChickenService) { }
  
  onSelect(chicken: Chicken) { 
    chicken.reduceScare();
    this.selectedChicken = chicken; 
  }
}


