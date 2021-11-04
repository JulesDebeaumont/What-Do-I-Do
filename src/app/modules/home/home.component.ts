import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class HomeComponent {

  constructor() { }

  prepareRoute(outlet: RouterOutlet): string | void {
    return outlet?.activatedRouteData?.animation
  }

}
