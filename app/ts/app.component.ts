import { Component } from 'angular2/core';
import { ChickenService }  from './chickens/services/chicken.service';
import { ChickensComponent } from './chickens/chickens.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ChickensComponent],
  providers: [
    ChickenService
  ]
})

export class AppComponent {
  title = 'Chicken Whisperer';
}
