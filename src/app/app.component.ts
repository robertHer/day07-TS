import { Component } from '@angular/core';

class CarBrand{
  protected make:string;
  constructor(make:string){
this.make = make;
  }
}
let ford = new CarBrand('Ford');
console.log(ford)

class Car extends CarBrand{
model:string;
year:number;

constructor(make:string,model:string, year:number){
super(make);
this.model = model;
this.year = year;
}

getDetails(){
  return (this.model,this.make, this.year);
}

}
let honda = new Car('honda','model', 1990);
console.log(honda)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
