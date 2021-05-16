import { Component, OnInit } from '@angular/core';
import { Post} from "../post"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  elementdisable = true

  examplePost : Post = {
    username: "Pedro Abreu",
    smldescription: "pequena descrição",
    description: "descrição completa do post, não sei organizar o backend, gerar uma data de posts??, para fazer: for chamar posts e fazer passar informação de um componente pai para filho"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
