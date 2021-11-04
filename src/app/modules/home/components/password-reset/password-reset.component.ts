import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations/routeAnimation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  animations: [fadeInAnimation]
})
export class PasswordResetComponent {

  email: FormControl = new FormControl('', [Validators.required, Validators.email])
  errorMessage!: string
  isSent: boolean = false

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }


  getErrorMessageEmail(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''
  }


  onSubmit(): void {
    this.authService.resetPassword({
      email: this.email.value,
    })
      .subscribe((response) => {
        this.isSent = true
      }, (error) => {
        if (error.status === 0) {
          this.errorMessage = 'An internal error has occured'
        } else {
          this.errorMessage = 'Email is incorrect.'
        }
      })
  }
}
