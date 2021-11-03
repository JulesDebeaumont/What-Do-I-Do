import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
