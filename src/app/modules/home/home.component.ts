import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class HomeComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard/tasks');
    }
   }

  prepareRoute(outlet: RouterOutlet): string | void {
    return outlet?.activatedRouteData?.animation
  }

}
