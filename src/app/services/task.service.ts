// core
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
    return this.http.get(environment.apiUrl + `/users/${this.auth.userId}/tasks`, this.httpOptions);
  }

  /**
   * POST - Post task by user
   */
   postTask(taskData: Task): Observable<any> {
    return this.http.post(environment.apiUrl + `/users/${this.auth.userId}/tasks`, taskData, this.httpOptions);
  }
}
