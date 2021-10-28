import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/slideInAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {

  constructor(public router: Router) { }

  prepareRoute(outlet: RouterOutlet): string | void {
    return outlet?.activatedRouteData?.animation
  }

  isLoggedOut() : boolean {
    return this.router.url === '/login' || this.router.url === '/register'
  }

}
