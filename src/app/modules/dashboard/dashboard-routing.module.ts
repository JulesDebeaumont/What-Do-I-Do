// core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { DashboardComponent } from './dashboard.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', component: TaskListComponent
      },
      {
        path: 'tasks/new', component: TaskFormComponent
      },
      {
        path: 'activities', component: ActivityListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
