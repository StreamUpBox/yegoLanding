import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelComeComponent } from './welcome/welComeComponent';
import { createCustomElement } from '@angular/elements';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ApiService } from './api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    WelComeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    // AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},ApiService],
  entryComponents: [WelComeComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    //TODO: define other pages such as login, register like I set welcomePage too
    //TODO: use the example on WelcomePage on how I get csrf_token wen the element is used inside laravel so I can make normal request without hussle
    //TODO: use normal angular routing to go to login or register as normal angular app routing stuff
    //TODO: submit login, register form as you normally do in angular with any skills you got in angular.
    
    const el = createCustomElement(WelComeComponent, { injector: this.injector });
    // el.setAttribute('state', 'init');
    customElements.define('yego-welcome', el);
   }
}
