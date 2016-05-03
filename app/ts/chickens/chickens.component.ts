import {Component} from 'angular2/core';
import {Chicken} from './models/chicken';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import { ChickenService } from './services/chicken.service';

@Component({
    selector: 'my-chickens',
    templateUrl: 'app/chickens/chickens.component.html',
    styleUrls:  ['app/chickens/chickens.component.css']
})
export class ChickensComponent implements OnInit {
  chickens: Chicken[];
  selectedChicken: Chicken;
  
  constructor(
    private _chickenService: ChickenService) { }
    
  getHeroes() {
    this._chickenService.getChickens().then(chickens => this.chickens = chickens);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(chicken: Chicken) { this.selectedChicken = chicken; }
}


