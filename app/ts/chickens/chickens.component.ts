import {Component} from 'angular2/core';
import {Chicken} from '../../game/chicken';
import {ChickenPen} from '../../game/chickenPen';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { ChickenService } from './services/chicken.service';

@Component({
    selector: 'my-chickens',
    templateUrl: 'app/chickens/views/chickens.component.html',
    styleUrls:  ['app/chickens/views/chickens.component.css']
})
export class ChickensComponent implements OnInit {
  chickenPen: ChickenPen;
  selectedChicken: Chicken;
  
  constructor(
    private _chickenService: ChickenService) { }
    
  getHeroes() {
    this._chickenService.getChickens().then(chickens => this.chickenPen = new ChickenPen(chickens));
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(chicken: Chicken) { 
    chicken.reduceScare();
    this.selectedChicken = chicken; 
  }
}


