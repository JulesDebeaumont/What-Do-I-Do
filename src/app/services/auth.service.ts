import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// services
import { CookieStorageService } from './cookie-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userId!: number;
  private httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private http: HttpClient,
    private tokenDecoder: JwtHelperService,
    private cookieStorage: CookieStorageService,
    private router: Router
  ) { }


  /**
   * POST - Log in
   */
  login(loginData: object): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/login', loginData, this.httpOptions)
      .pipe(
        map((response: any) => {
          this.setUser(response.token, response.refresh_token);
          this.router.navigateByUrl('/dashboard');
        })
      )
  }


  /**
   * POST - Register
   */
  register(registerData: object): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/register', registerData, this.httpOptions)
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
    return this.http.post<any>(environment.apiUrl + '/reset/password', userData, this.httpOptions)
  }


  /**
   * POST - Refresh token
   */
  refreshToken(token: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/token/refresh', {
      refreshToken: token
    }, this.httpOptions);
  }


  /**
   * Check if logged in depending on the token
   */
  isLoggedIn(): boolean {
    const token = this.cookieStorage.getCookie('token');
    if (token) {
      return !this.tokenDecoder.isTokenExpired(token);
    }

    return false;
  }


  /**
   * Get userId decoded from token and stored in cookie
   */
  getUserId(): string {
    return this.cookieStorage.getCookie('userId');
  }


  /**
   * Put token and userId in cookie
   */
  setUser(token: string, refreshToken: string): void {
    if (token && refreshToken) {
      const userId = this.tokenDecoder.decodeToken(token).id;

      this.cookieStorage.setCookie('token', token);
      this.cookieStorage.setCookie('refresh_token', refreshToken);
      this.cookieStorage.setCookie('userId', userId);
      this.userId = userId;
    }
  }


  /**
   * Logout from the app
   */
  logout(): void {
    this.cookieStorage.removeAll();
    this.router.navigateByUrl('/home');
  }


  /**
   * UNUSED -> de la même manière que les thunks en React, on gérera les erreurs directement dans les composants ici
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
