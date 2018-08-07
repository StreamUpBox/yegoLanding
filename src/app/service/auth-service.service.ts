import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
@Injectable({ providedIn: 'root' })

export class AuthService {
 redirectUrl = '';
  constructor(private myRoute: Router, private api: ApiService) { }

  sendToken(token: string) {
    localStorage.setItem('auth_token', this.api.encrypt(token).toString());
     return true;
  }

  setRedirectUrl(url) {
    localStorage.setItem('redirect_url', this.api.encrypt(url).toString());
    return true;
  }
  getRedirectUrl() {
    const redirect_url = localStorage.getItem('redirect_url');
    if (redirect_url) {
      return this.api.decrypt(redirect_url);
    }
  }
  getToken() {
    const auth_token = localStorage.getItem('auth_token');
    return this.api.decrypt(auth_token);

  }

  isLoggednIn() {
    return this.getToken() !== null;

  }

  logout() {
    console.log(this.getToken());
    this.api.logout(this.getToken()).subscribe(res => {
      console.log(res);
      localStorage.removeItem('auth_token');
    this.myRoute.navigate(['login']);
    }, _error => {
      console.log(_error);
    });
  }

}
