import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;
  encrpty_key = CryptoJS.enc.Utf8.parse('7061737323313231');
  encrpty_iv = CryptoJS.enc.Utf8.parse('7061737323313231');

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
   }
  createAuthorizationHeader(auth_token) {
    return {
      headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ' + auth_token
  }};
  }
  emailVerifying(data) {
    return this.post('http://localhost:8000/api/auth/user_verify', data);
  }

  passwordVerifying(data, auth_token) {
    return this.http.post<any>('http://localhost:8000/api/auth/login', data, this.createAuthorizationHeader(auth_token) );
  }
  logout(auth_token) {
    return this.http.post<any>('http://localhost:8000/api/auth/logout', {logout: true}, this.createAuthorizationHeader(auth_token) );
  }
  sendLinkToResetPassword(data, auth_token) {
    return this.http.post<any>('http://localhost:8000/api/auth/reset_password', data, this.createAuthorizationHeader(auth_token) );
  }

  get(url, token) {
    this.headers.set('X-CSRF-TOKEN', token);
    return this.http.get<any>(url, {
      headers: this.headers
    });
  }
  post(url, data: any) {
    return this.http.post<any>(url, data, {
      headers: {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
        }
    });
  }
  securePost(data, auth_token) {
    this.headers.set('Accept', 'application/json');
    this.headers.set('Authorization', 'Bearer ' + auth_token);
    return this.post('http://localhost:8000/api/auth/login', data);
  }
  put(url, data) {
    return this.http.post<any>(url, data, {
      headers: this.headers
    });
  }
  patch(url, data) {
    data._token =  document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return this.http.patch<any>(url, data, {
      headers: this.headers
    });
  }

  encrypt(value) {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value), this.encrpty_key,
        {
            keySize: 128 / 8,
            iv: this.encrpty_iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
  }

  decrypt(encrypted) {
    return CryptoJS.AES.decrypt(encrypted, this.encrpty_key, {
      keySize: 128 / 8,
      iv: this.encrpty_iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8);
  }
}
