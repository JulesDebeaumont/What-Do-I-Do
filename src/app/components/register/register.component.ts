import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { slideInAnimation } from 'src/app/animations/slideInAnimation';
import { passwordMatchValidator } from './registerFormValidator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    slideInAnimation
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

  // Getters pour html plus propre
  get email() { return this.registerForm.get('email') }
  get newPassword() { return this.registerForm.get('newPassword') }
  get password() { return this.registerForm.get('newPassword.password') }
  get passwordConfirm() { return this.registerForm.get('newPassword.passwordConfirm') }


  constructor(private formBuilder: FormBuilder) { }

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
      console.log('yes!')
    }
  }

}
