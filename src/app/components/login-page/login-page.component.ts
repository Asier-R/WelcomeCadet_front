import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    window.alert('You have succesfuly logged in:\n' + 'username: ' + username + '\n' + 'password: ' + password);
    this.loginForm.reset();
  }

}
