// core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { DashboardComponent } from './dashboard.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ActivityFormComponent } from './components/activity-form/activity-form.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';



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
        path: 'tasks/:id/edit', component: TaskFormComponent
      },
      {
        path: 'activities', component: ActivityListComponent
      },
      {
        path: 'activities/new', component: ActivityFormComponent
      },
      {
        path: 'activities/:id/edit', component: ActivityFormComponent
      },
      {
        path: 'tic-tac-toe', component: TicTacToeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
