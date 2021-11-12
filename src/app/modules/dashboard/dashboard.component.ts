import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class DashboardComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  menus: Array<any> = [
    { title: "Tasks", path: "/dashboard/tasks", icon: "event" },
    { title: "Activities", path: "/dashboard/activities", icon: "bookmarks" },
    { title: "About", path: "/dashboard/about", icon: "question_mark" }
  ];
  private _mobileQueryListener: () => void;

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    public auth: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  prepareRoute(outlet: RouterOutlet): string | void {
    return outlet?.activatedRouteData?.animation
  }
}
