import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';


import {Router} from '@angular/router';
import { AuthService } from './service/auth-service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate  {

  constructor(private auth: AuthService,

    private myRoute: Router) {

  }

  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isLoggednIn()) {
      const url: string = state.url;
      this.auth.redirect_url = url;
      this. auth.setRedirectUrl(url);
      return true;

    } else {
      this.myRoute.navigate(['sign-in'], { queryParams: { redirect: state.url }});
      return false;

    }

  }

}
