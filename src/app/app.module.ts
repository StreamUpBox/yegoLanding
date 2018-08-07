import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelComeComponent } from './welcome/welComeComponent';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app.routing';
import { MaterialModules } from './app.material.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/pagenotfound.component';
import { PasswordVerifyComponent } from './login/password-verify/password-verify.component';
import { EmailVerifyComponent } from './login/email-verify/email-verify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { AuthGuard } from './auth.guard';
import { BoxComponent } from './box/box.component';
import { AuthService } from './service/auth-service';
import { SendResetPassLinkComponent } from './reset-password/send-reset-pass-link.component';
@NgModule({
  declarations: [
    WelComeComponent,
    LoginComponent,
    AppComponent,
    RegisterComponent,
    PageNotFoundComponent,
    EmailVerifyComponent,
    PasswordVerifyComponent,
    BoxComponent,
    SendResetPassLinkComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule,
    WebStorageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}, AuthGuard, AuthService ]
})
export class AppModule {
  constructor() {

  }
}
