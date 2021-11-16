import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
// models
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  isLoading: boolean = false;
  errorMessageToggle?: string;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  toggleTaskActivation(task: Task): void {
    const toggledTask = { ...task, isActivated: !task.isActivated };
    this.isLoading = true;
    console.log("true")
    this.taskService.patchTask(toggledTask)
      .subscribe(() => {
        task.isActivated = !task.isActivated;
      }, (error) => {
        this.errorMessageToggle = error.message;
      }, () => {
        this.isLoading = false;
      })
  }

}
