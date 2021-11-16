// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
// material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
// interceptors
import { HttpInterceptorProviders } from './interceptors';
// services
import { CookieStorageService } from './services/cookie-storage.service';


export function jwtOptionsFactory(cookieStorage: CookieStorageService) {
  return {
    tokenGetter: () => {
      return cookieStorage.getCookie('token');
    },
    allowedDomains: [environment.appUrl]
  }
}


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [CookieStorageService]
      }
    })
  ],
  providers: [
    HttpInterceptorProviders,
    CookieStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
