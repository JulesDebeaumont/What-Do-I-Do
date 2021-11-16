// core
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// model
import { Task } from '../models/task.model';
// services
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiTasksUrl: string = '/tasks';
  private httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private httpOptionsPatch: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/merge-patch+json'
    })
  }

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }


  /**
   * GET - Get tasks by user
   */
  getAllUserTasks(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `/users/${this.auth.getUserId()}${this.apiTasksUrl}`, this.httpOptions);
  }


  /**
  * GET - Get task by user
  */
  getTask(taskId: number): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `${this.apiTasksUrl}/${taskId}`, this.httpOptions);
  }


  /**
   * POST - Post task by user
   */
  postTask(taskData: Task): Observable<any> {
    return this.http.post<any>(environment.apiUrl + `${this.apiTasksUrl}/${taskData.id}`, taskData, this.httpOptions);
  }


  /**
  * PATCH - Patch task by user
  */
  patchTask(taskData: Task): Observable<any> {
    return this.http.patch<any>(environment.apiUrl + `${this.apiTasksUrl}/${taskData.id}`, taskData, this.httpOptionsPatch);
  }


  /**
  * DELETE - Delete task by user
  */
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + `${this.apiTasksUrl}/${taskId}`, this.httpOptions);
  }
}
