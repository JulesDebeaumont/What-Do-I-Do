import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  taskId: number = Number(this.route.snapshot.paramMap.get('id'));
  isEdit: boolean = this.taskId !== 0;
  currentTask?: Task;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.isEdit) {
      this.getTask(this.taskId);
    }
  }

  getTask(taskId: number): void {
    this.isLoading = true;
    this.taskService.getTask(taskId)
      .subscribe((response) => {
        this.currentTask = response;
      }, (error) => {
        console.log(error.message);
      }, () => {
        this.isLoading = false;
      })
  }

  saveTask(task: Task): void {
    this.isLoading = true;
    this.taskService.postTask(task)
      .subscribe((response) => {
        this.router.navigateByUrl('/dashboard/tasks');
      }, (error) => {
        console.log(error.message);
      }, () => {
        this.isLoading = false;
      })
  }

}
