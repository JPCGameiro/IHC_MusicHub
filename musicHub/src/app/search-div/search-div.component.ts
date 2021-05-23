import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-div',
  templateUrl: './search-div.component.html',
  styleUrls: ['./search-div.component.css']
})
export class SearchDivComponent implements OnInit {

  constructor(public router: Router) { 
  }
  ngOnInit(): void {
  }

}
