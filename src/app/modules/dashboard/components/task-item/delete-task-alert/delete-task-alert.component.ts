import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';

export interface DeleteTaskAlertData {
  task: Task
}

@Component({
  selector: 'app-delete-task-alert',
  templateUrl: './delete-task-alert.component.html'
})
export class DeleteTaskAlertComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeleteTaskAlertData) {}
}
