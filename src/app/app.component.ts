import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as $ from 'jquery';
import { AuthService } from './service/auth-service.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.Native,
  providers: []
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }

  constructor(public dialog: MatDialog, private auth: AuthService, private router: Router) {
    // if (this.auth.isLoggednIn()) {
    //     this.router.navigate([this.auth.getRedirectUrl()]);
    // }
   }
}
