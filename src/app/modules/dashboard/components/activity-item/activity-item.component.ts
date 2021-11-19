import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// models
import { Activity } from 'src/app/models/activity.model';
// services
import { ActivityService } from 'src/app/services/activity.service';
// components
import { DeleteActivityAlertComponent } from './delete-activity-alert/delete-activity-alert.component';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent {

  @Input() activity!: Activity;

  constructor(
    private dialog: MatDialog,
    private activityService: ActivityService
  ) { }

  deleteActivityWithAlert(activity: Activity): void {
    const dialogRef = this.dialog.open(DeleteActivityAlertComponent, {
      data: {
        activity: activity
      }
    });
    dialogRef.afterClosed()
      .subscribe((result) => {
        if (result === "delete") {
          this.activityService.deleteActivity(activity.id)
        }
      });
  }
}
