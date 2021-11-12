// core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { DashboardComponent } from './dashboard.component';
import { TaskListComponent } from './components/task-list/task-list.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', component: TaskListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
