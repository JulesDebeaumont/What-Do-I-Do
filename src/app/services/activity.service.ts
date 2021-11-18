import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  allUserActivities!: Activity[];
  errorMessage!: string;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }


  /**
  * GET - Get all activities by user
  */
  getAllUserActivities() {
    return this.http.get<Activity[]>(environment.apiUrl + `/users/${this.auth.getUserId()}${this.apiActivityUrl}`, this.httpOptions)
      .subscribe((response: any) => {
        this.allUserActivities = response.activities;
      }, (error) => {
        if (error.status === 0) {
          this.errorMessage = 'An internal error has occured';
        } else {
          this.errorMessage = `An error has occured: ${error.message}`;
        }
      }
      )
  }


  /**
  * GET - Get activity
  */
  getActivity(activityId: number): Observable<any> {
    return this.http.get<Activity>(environment.apiUrl + `${this.apiActivityUrl}/${activityId}`, this.httpOptions);
  }


  /**
   * POST - Post activity
   */
  postActivity(activityData: Activity): Observable<any> {
    return this.http.post<Activity>(environment.apiUrl + `${this.apiActivityUrl}`, activityData, this.httpOptions);
  }


  /**
  * PATCH - Patch activity
  */
  patchActivity(activityData: Activity): Observable<any> {
    return this.http.patch<Activity>(environment.apiUrl + `${this.apiActivityUrl}/${activityData.id}`, activityData, this.httpOptionsPatch);
  }


  /**
  * DELETE - Delete activity
  */
  deleteActivity(activityId: number): Observable<any> {
    return this.http.delete<Activity>(environment.apiUrl + `${this.apiActivityUrl}/${activityId}`, this.httpOptions);
  }
}
