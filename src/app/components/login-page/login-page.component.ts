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
    window.alert('You have succesfuly loged in:\n' + 'username: ' + this.loginForm.value.username + '\n' + 'password: ' + this.loginForm.value.password);
    this.loginForm.reset();
  }

}
