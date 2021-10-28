import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { slideInAnimation } from 'src/app/animations/slideInAnimation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    slideInAnimation
  ]
})

export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])

  hidePassword = true

  /**
   * Error message for email input
   * @returns {string} Message to display
   */
  getErrorMessageEmail(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''
  }

  
  /**
   * Error message for password input
   * @returns {string} Message to display
   */
  getErrorMessagePassword(): string {
    if (this.password.hasError('required')) {
      return 'You must enter a value'
    }

    return ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
