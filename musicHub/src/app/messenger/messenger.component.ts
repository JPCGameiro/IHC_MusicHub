import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  toogleMX :boolean;

  indivMX

  constructor() { 
    
  }

  toogleMXshow(){
    this.toogleMX = !this.toogleMX;
  }



  ngOnInit(): void {
    this.toogleMX = true;
  }

}
