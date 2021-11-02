import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('')
  hidePassword = true
  errorMessage!: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }


  getErrorMessageEmail(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''
  }


  onSubmit(): void {
    this.authService.login({
      email: this.email.value,
      password: this.password.value
    })
      .subscribe((response) => {

      }, (error) => {
        if (error.status === 0) {
          this.errorMessage = 'An internal error has occured'
        } else {
          this.errorMessage = 'Email or password is incorrect.'
        }
      })
  }

}
