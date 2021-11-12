import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { MediaMatcher } from '@angular/cdk/layout';

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
    { title: "Tasks", path: "/dashboard/tasks" },
    { title: "Activities", path: "/dashboard/activities" },
    { title: "About", path: "/dashboard/about" },
    { title: "Disconnect", path: "." }
  ];
  private _mobileQueryListener: () => void;

  constructor(
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
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
