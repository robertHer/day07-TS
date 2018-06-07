import { Component } from '@angular/core';

let a: number = 5;
let b:boolean = true;
let c:string = 'this is string';
let d:any= 'any type can be allowed';
let e: number[]= [1,2,3];
let f:any[]= [1,true,'anthing can be written here'];

console.log(a);
console.log(b);
console.log(c);
console.log(d);console.log(e);console.log(f);




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
}
