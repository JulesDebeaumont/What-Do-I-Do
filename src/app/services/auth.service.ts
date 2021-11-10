import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_KEY = 'auth_token';
  private httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private http: HttpClient,
    private tokenDecoder: JwtHelperService,
    private router: Router,
    private loading: LoadingService
  ) { }


  /**
   * POST - Log in
   */
  login(loginData: object): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/login', loginData, this.httpOptions)
      .pipe(
        map((response: any) => {
          localStorage.setItem(this.TOKEN_KEY, response.token)
          this.router.navigateByUrl('/dashboard')
        })
      )
  }


  /**
   * POST - Register
   */
  register(registerData: object): Observable<any> {
    return this.http.post(environment.apiUrl + '/register', registerData, this.httpOptions)
      .pipe(
        map((response: any) => {
          this.router.navigateByUrl('/home/login');
        })
      )
  }


  /**
   * POST - Reset Password
   */
  resetPassword(userData: object): Observable<any> {
    return this.http.post(environment.apiUrl + '/reset/password', userData, this.httpOptions)
  }


  /**
   * POST - Refresh token
   */
  refreshToken(token: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/token/refresh', {
      refreshToken: token
    }, this.httpOptions);
  }


  /**
   * Check if logged in depending on the jwt, else log out
   */
  isLoggedIn(): boolean {
    const token = this.getAuthToken();
    const isExpired = this.tokenDecoder.isTokenExpired(token);

    return token && !isExpired;
  }


  /**
   * Get JWT
   */
  getAuthToken(): any {
    return localStorage.getItem(this.TOKEN_KEY);
  }


  /**
   * Logout from the app
   */
  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }


  /**
   * UNUSED -> de la même manière que les thunks en React, on gérera les erreurs directement dans les composants
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
