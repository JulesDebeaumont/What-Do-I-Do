import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';
import { passwordMatchValidator } from './registerFormValidator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
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

  hidePassword = true
  hidePasswordConfirm = true


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }



  /**
   * Error message for email input
   * @returns {string} Message to display
   */
  getErrorMessageEmail(): string {
    if (this.registerForm.value('email').hasError('required')) {
      return 'You must enter a value'
    }

    return this.registerForm.value('email').hasError('email') ? 'Not a valid email' : ''
  }


}
