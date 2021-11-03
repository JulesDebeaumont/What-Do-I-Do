// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// meterial
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HomeModule { }
