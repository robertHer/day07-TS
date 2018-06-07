import { Component } from '@angular/core';

interface Fighter{
  name:string;
  points:number;
}
let fighter1:Fighter = {name:'tod',points :5} ;
let fighter2:Fighter = {name:'james', points: 10};
console.log(fighter1);
console.log(fighter2);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
}
