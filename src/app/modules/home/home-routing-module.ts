// core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'login',  component: LoginComponent
  },
  {
    path: 'register',  component: RegisterComponent
  },
  {
    path: 'password-reset', component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
