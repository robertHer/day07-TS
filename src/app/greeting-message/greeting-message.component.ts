import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greeting-message',
  templateUrl: `
  <h1>Greeting this is a message!</h1>
  
  `,
  styleUrls: [`
  h1{color:green;
    background-color:whitesmoke;
  }
  `]
})
export class GreetingMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
