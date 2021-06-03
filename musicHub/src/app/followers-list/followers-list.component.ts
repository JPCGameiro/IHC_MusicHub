import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ARTISTS } from '../mock-musicians';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {

  constructor(public router: Router) { }

  artists = ARTISTS

  ngOnInit(): void {
  }

}
