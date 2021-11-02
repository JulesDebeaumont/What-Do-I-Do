import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from './registerFormValidator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    // https://angular.io/guide/form-validation#cross-field-validation
    // Validation du password
    newPassword: this.formBuilder.group({
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'passwordConfirm': new FormControl('', [
        Validators.required
      ])
    }, { validators: passwordMatchValidator })
  })
  hidePassword: boolean = true
  hidePasswordConfirm: boolean = true
  errorMessage!: string


  // Getters pour html plus propre
  get email() { return this.registerForm.get('email') }
  get newPassword() { return this.registerForm.get('newPassword') }
  get password() { return this.registerForm.get('newPassword.password') }
  get passwordConfirm() { return this.registerForm.get('newPassword.passwordConfirm') }


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }


  ngOnInit(): void {
  }


  onPasswordInput() {
    if (this.newPassword?.hasError('passwordMismatch'))
      // ???? Si y'a une erreur on met une erreur ?
      this.passwordConfirm?.setErrors([{ 'passwordMismatch': true }]);
    else
      this.passwordConfirm?.setErrors(null);
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = {
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      }
      this.authService.register(userData)
        .subscribe((response) => {

        }, (error) => {
          if (error.status === 0) {
            this.errorMessage = 'An internal error has occured'
          } else {
            this.errorMessage = error.message
          }
        })
    }
  }

}
