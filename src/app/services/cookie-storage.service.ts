import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  private prefix = environment.appName;

  constructor(
    private cookie: CookieService
  ) { }

  public getCookie(name: string): string {
    name = `${this.prefix}-${name}`;
    return this.cookie.get(name);
  }

  public setCookie(name: string, value: string): void {
    name = `${this.prefix}-${name}`;
    this.cookie.set(name, value, undefined, '/', environment.appUrl, true, 'Strict');
  }

  public removeAll() {
    this.cookie.deleteAll();
  }
}
