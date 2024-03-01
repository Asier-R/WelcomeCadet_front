import { Component, booleanAttribute } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  flags = {
    isUsernameValid: true,
    isPasswordValid: true,
    isConfirmPasswordValid: true,
    isEmailValid: true
  };

  constructor(
    private formBuilder: FormBuilder
  ) { }

  signUpForm = this.formBuilder.group({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  checkInputFields(username: any, password: any, confirmPassword: any, email: any) {
    if (username === '') {
      this.flags['isUsernameValid'] = false;
    } else {
      this.flags['isUsernameValid'] = true;
    };
    
    if (password === '') {
      this.flags['isPasswordValid'] = false;
    } else {
      this.flags['isPasswordValid'] = true;
    };

    if (confirmPassword === '') {
      this.flags['isConfirmPasswordValid'] = false;
    } else {
      this.flags['isConfirmPasswordValid'] = true;
    };

    if (email === '') {
      this.flags['isEmailValid'] = false;
    } else {
      this.flags['isEmailValid'] = true;
    };
  };

  signUp() {
    const username = this.signUpForm.value.username;
    const password = this.signUpForm.value.password;
    const confirmPassword = this.signUpForm.value.confirmPassword;
    const email = this.signUpForm.value.email;

    this.checkInputFields(username, password, confirmPassword, email);

    /*window.alert('You have succesfuly logged in:\n'
      + 'username: ' + username
      + '\n' + 'password: ' + password
      + '\n' + 'confirmPassword: ' + confirmPassword
      + '\n' + 'email: ' + email);
  */
  };
}
