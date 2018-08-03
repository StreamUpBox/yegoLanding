import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelComeComponent } from './welcome/welComeComponent';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ApiService } from './api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app.routing';
import { MaterialModules } from './app.material.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/pagenotfound.component';

@NgModule({
  declarations: [
    WelComeComponent,
    LoginComponent,
    AppComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {
  constructor() {

  }
  // ngDoBootstrap() {
  //   const welcome = createCustomElement(WelComeComponent, { injector: this.injector });
  //   const login = createCustomElement(WelComeComponent, { injector: this.injector });
  //   // el.setAttribute('state', 'init');
  //   customElements.define('yego-welcome', welcome);
  //   customElements.define('yego-login', welcome);
  //  }
}
