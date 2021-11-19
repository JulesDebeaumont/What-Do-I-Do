import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity.model';

export interface DeleteActivityAlertData {
  activity: Activity
}

@Component({
  selector: 'app-delete-activity-alert',
  templateUrl: './delete-activity-alert.component.html'
})
export class DeleteActivityAlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeleteActivityAlertData) {}

}
