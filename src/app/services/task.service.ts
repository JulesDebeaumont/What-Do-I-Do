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

  private httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }


  /**
   * GET - Get tasks by user
   */
  getAllUserTasks(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `/users/${this.auth.userId}/tasks`, this.httpOptions);
  }


  /**
  * GET - Get task by user
  */
  getUserTask(taskId: number): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `/users/${this.auth.userId}/tasks/${taskId}`, this.httpOptions);
  }


  /**
   * POST - Post task by user
   */
  postUserTask(taskData: Task): Observable<any> {
    return this.http.post<any>(environment.apiUrl + `/users/${this.auth.userId}/tasks/${taskData.id}`, taskData, this.httpOptions);
  }


  /**
  * PATCH - Patch task by user
  */
  patchUserTask(taskData: Task): Observable<any> {
    return this.http.patch<any>(environment.apiUrl + `/users/${this.auth.userId}/tasks/${taskData.id}`, taskData, this.httpOptions);
  }


  /**
  * DELETE - Delete task by user
  */
  deleteUserTask(taskId: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + `/users/${this.auth.userId}/tasks/${taskId}`, this.httpOptions);
  }
}
