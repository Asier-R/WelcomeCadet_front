import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { SearchThemeCardComponent } from "./components/search-theme-card/search-theme-card.component";

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        LoginPageComponent,
        WelcomePageComponent,
        SignupPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        SearchThemeCardComponent
    ]
})
export class AppModule { }
