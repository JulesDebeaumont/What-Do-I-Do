import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
  animations: [fadeInAnimation]
})
export class ActivityListComponent implements OnInit {

  constructor(
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.activityService.getAllUserTasks();
  }

}
