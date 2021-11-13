import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
  animations: [fadeInAnimation]
})
export class ActivityListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
