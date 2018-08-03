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
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    WelComeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, ApiService],
  entryComponents: [WelComeComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const welcome = createCustomElement(WelComeComponent, { injector: this.injector });
    const login = createCustomElement(WelComeComponent, { injector: this.injector });
    // el.setAttribute('state', 'init');
    customElements.define('yego-welcome', welcome);
    customElements.define('yego-login', welcome);
   }
}
