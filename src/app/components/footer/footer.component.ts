import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
