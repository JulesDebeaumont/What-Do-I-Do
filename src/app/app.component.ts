import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from './animations/routeAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class AppComponent {

  constructor() { }

  // Route animation
  prepareRoute(outlet: RouterOutlet): string | void {
    return outlet?.activatedRouteData?.animation
  }

}
