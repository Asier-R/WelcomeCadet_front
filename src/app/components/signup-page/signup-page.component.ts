import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  signUpForm = this.formBuilder.group({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  signUp() {
    const username = this.signUpForm.value.username;
    const password = this.signUpForm.value.password;
    const confirmPassword = this.signUpForm.value.confirmPassword;
    const email = this.signUpForm.value.email;

    window.alert('You have succesfuly logged in:\n'
      + 'username: ' + username
      + '\n' + 'password: ' + password
      + '\n' + 'confirmPassword: ' + confirmPassword
      + '\n' + 'email: ' + email);
  }

}
