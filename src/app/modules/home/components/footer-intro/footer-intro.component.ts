import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';

@Component({
  selector: 'app-footer-intro',
  templateUrl: './footer-intro.component.html',
  styleUrls: ['./footer-intro.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class FooterIntroComponent implements OnInit {

  year: number = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
