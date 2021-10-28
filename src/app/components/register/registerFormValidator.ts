import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// https://angular.io/guide/form-validation#adding-cross-validation-to-reactive-forms
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')
    const passwordConfirm = control.get('passwordConfirm')

    // password && passwordConfirm pour être sur qu'ils ne sont pas nuls
    return password && passwordConfirm && password.value === passwordConfirm.value ? null : { 'passwordMismatch': true }
}