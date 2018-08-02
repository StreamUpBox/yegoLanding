import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  csrf_token: string;

  constructor(private http: HttpClient) { }
  login(){
    console.log('we can call a service');
      // TODO: go to login page, but Here I provided how you can get csrf token if this element is used in laravel component so that you can freely call protected api
      if (document.querySelector('meta[name="csrf-token"]')) {
        
        this.csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        // this.http.post('dev.yegobox.com/login','data'); //TODO: provide a new laravel app to do login so that designer can play with it locally without giving the entire backend
      }
    
  }
}
