import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
