import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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

  constructor(public router: Router) { }

  prepareRoute(outlet: RouterOutlet): string | void {
    return outlet?.activatedRouteData?.animation
  }

}
