import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
