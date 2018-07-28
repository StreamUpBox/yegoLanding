import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class WelComeComponent implements OnInit {

  @Input() label = 'Do not care';
  csrf_token: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  login() {
    // TODO: go to login page, but Here I provided how you can get csrf token if this element is used in laravel component so that you can freely call protected api
    if (document.querySelector('meta[name="csrf-token"]')) {
      this.csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }
  }
  register(){
    //TODO: go register page using router and Do some api call when registering
  }

}
