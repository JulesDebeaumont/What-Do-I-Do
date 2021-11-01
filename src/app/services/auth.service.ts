import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private urlAPI: string = 'http://localhost:8000/api';


  constructor(private http: HttpClient) { }


  /**
   * POST Log in to the server
   * @param loginData Object with email & password
   * @returns 
   */
  login(loginData: object): Observable<any> {
    return this.http.post(this.urlAPI + 'login', loginData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


  /**
   * POST Register to the server
   * @param registerData Object with email & password
   * @returns 
   */
  register(registerData: object): Observable<any> {
    return this.http.post(this.urlAPI + 'register', registerData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


  /**
   * Error handler https://angular.io/guide/http#getting-error-details
   * @param error The error
   * @returns Observable that emits no item
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    // A client-side or network error occurred.
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      // The backend returned an unsuccessful response code.
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
