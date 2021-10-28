import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { passwordMatchValidator } from './registerFormValidator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    // https://angular.io/guide/form-validation#cross-field-validation
    // Validation du password
    newPassword: this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(255)
      ]],
      passwordConfirm: ['', [
        Validators.required
      ]]
    }, { validators: passwordMatchValidator })
  })

  hidePassword: boolean = true
  hidePasswordConfirm: boolean = true

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
