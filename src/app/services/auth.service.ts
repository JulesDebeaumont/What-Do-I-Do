import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const urlAPI: string = 'http://localhost:8000/api';
const httpOptions: object = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }


  /**
   * POST - Log in
   */
  login(loginData: object): Observable<any> {
    return this.http.post(urlAPI + '/login', loginData, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


  /**
   * POST - Register
   */
  register(registerData: object): Observable<any> {
    return this.http.post(urlAPI + '/register', registerData, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


  /**
   * POST - Refresh token
   */
  refreshToken(token: string) {
    return this.http.post(urlAPI + '/refreshtoken', {
      refreshToken: token
    }, httpOptions);
  }


  /**
   * Error handler
   * https://angular.io/guide/http#getting-error-details
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) // A client-side or network error occurred.
    {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
