import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class LoginComponent {

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('');
  hidePassword: boolean = true;
  errorMessage!: string;

  constructor(
    private authService: AuthService,
    public loading: LoadingService
  ) { }


  getErrorMessageEmail(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''
  }


  onSubmit(): void {
    if (this.email.valid) {
      this.authService.login({
        email: this.email.value,
        password: this.password.value
      })
        .subscribe((response) => {

        }, (error) => {
          if (error.status === 0) {
            this.errorMessage = 'An internal error has occured'
          } else {
            this.errorMessage = 'Incorrect email or password'
          }
        })
    }
  }
}
