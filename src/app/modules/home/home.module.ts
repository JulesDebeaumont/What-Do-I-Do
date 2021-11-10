// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { HomeComponent } from './home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterIntroComponent } from './components/footer-intro/footer-intro.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
// modules
import { LoadingButtonModule } from '../loading-button/loading-button.module';
// material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    FooterIntroComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    LoadingButtonModule
  ]
})
export class HomeModule { }
