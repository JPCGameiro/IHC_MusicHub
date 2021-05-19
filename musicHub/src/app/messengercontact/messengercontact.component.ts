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

  constructor() { }

  ngOnInit(): void {
  }

}