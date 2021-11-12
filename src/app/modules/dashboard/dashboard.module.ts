// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { DashboardRoutingModule } from './dashboard-routing.module';
// components
import { DashboardComponent } from './dashboard.component';
// materials
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule
  ]
})
export class DashboardModule { }
