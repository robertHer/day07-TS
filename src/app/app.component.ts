import { Component } from '@angular/core';
import {Sedan} from './vehicle.model';

let honda = new Sedan ('honda', 'serw', 1990);
let ford = new Sedan ('ford', 'fadw', 1990);

console.log(ford);
console.log(honda)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
