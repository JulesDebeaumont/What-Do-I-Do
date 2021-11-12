import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class DashboardComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;
  menus: Array<any> = [
    { title: "Tasks", path: "/dashboard/tasks", icon: "event" },
    { title: "Activities", path: "/dashboard/activities", icon: "bookmarks" },
    { title: "Tic-Tac-Toe", path: "/dashboard/tic-tac-toe", icon: "grid_3x3" },
    { title: "About", path: "/dashboard/about", icon: "question_mark" }
    // See template for Log out boutton
  ];
  private _mobileQueryListener: () => void;

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    public auth: AuthService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/home/login');
    }
  }

  prepareRoute(outlet: RouterOutlet): string | void {
    return outlet?.activatedRouteData?.animation
  }
}
