// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { DashboardRoutingModule } from './dashboard-routing.module';
// components
import { DashboardComponent } from './dashboard.component';
// materials
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
