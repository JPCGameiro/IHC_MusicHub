import { Component, OnInit } from '@angular/core';
import { Contact} from "../contact"


@Component({
  selector: 'app-messengercontact',
  templateUrl: './messengercontact.component.html',
  styleUrls: ['./messengercontact.component.css']
})
export class MessengercontactComponent implements OnInit {

  exampleContact : Contact = {
    username : "Foo Fighters",
    smldescription: "you: See you there then!  - 2d ago"
  }

  exampleContact1 : Contact = {
    username : "Green Day",
    smldescription: "them: great to see u!  - 5h ago"
  }

  exampleContact2 : Contact = {
    username : "Three Doors Down",
    smldescription: ""
  }

  exampleContact3 : Contact = {
    username : "Mariza",
    smldescription: "them: Nice!  - 4h ago"
  }

  constructor() { }

  ngOnInit(): void {
  }

}