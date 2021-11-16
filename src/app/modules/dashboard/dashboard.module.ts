// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
// components
import { DashboardComponent } from './dashboard.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
// materials
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteTaskAlertComponent } from './components/task-item/delete-task-alert/delete-task-alert.component';
import { InfoTaskAlertComponent } from './components/task-item/info-task-alert/info-task-alert.component';
import { TaskFormComponent } from './components/task-form/task-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TaskListComponent,
    ActivityListComponent,
    TaskItemComponent,
    DeleteTaskAlertComponent,
    InfoTaskAlertComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class DashboardModule { }
