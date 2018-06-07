import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  displayParagraph:boolean = false;

 colorRed:string = "color-red";
 colorYellow:string = "background-yellow";
 hidetext:string = "hide-text";
 arr:any[]= ['color-red'];

}
