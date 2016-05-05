import { Component } from 'angular2/core';
import { ChickensComponent } from './chickens.component';
import {GameInitializer} from './gameInitializer';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ChickensComponent]
})

export class AppComponent {
  title = 'Chicken Whisperer';
  game = GameInitializer.generateGame();
}
