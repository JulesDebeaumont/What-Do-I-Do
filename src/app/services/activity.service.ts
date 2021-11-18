import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/activity.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiActivityUrl: string = '/activities';
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
  allUserActivites! : Activity[];

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }


   /**
   * GET - Get all activities by user
   */
    getAllUserTasks(): Observable<any> {
      return this.http.get<Activity[]>(environment.apiUrl + `/users/${this.auth.getUserId()}${this.apiActivityUrl}`, this.httpOptions);
    }
  
  
    /**
    * GET - Get activity
    */
    getTask(activityId: number): Observable<any> {
      return this.http.get<Activity>(environment.apiUrl + `${this.apiActivityUrl}/${activityId}`, this.httpOptions);
    }
  
  
    /**
     * POST - Post activity
     */
    postTask(taskData: Activity): Observable<any> {
      return this.http.post<Activity>(environment.apiUrl + `${this.apiActivityUrl}`, taskData, this.httpOptions);
    }
  
  
    /**
    * PATCH - Patch activity
    */
    patchTask(taskData: Activity): Observable<any> {
      return this.http.patch<Activity>(environment.apiUrl + `${this.apiActivityUrl}/${taskData.id}`, taskData, this.httpOptionsPatch);
    }
  
  
    /**
    * DELETE - Delete activity
    */
    deleteTask(activityId: number): Observable<any> {
      return this.http.delete<Activity>(environment.apiUrl + `${this.apiActivityUrl}/${activityId}`, this.httpOptions);
    }
}
