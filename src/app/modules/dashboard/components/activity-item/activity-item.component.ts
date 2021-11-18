import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent {

  @Input() activity!: Activity;

  constructor() { }

}
