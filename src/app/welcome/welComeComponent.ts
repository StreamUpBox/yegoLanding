import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.Native,
  providers: [ApiService]
})
export class WelComeComponent implements OnInit {

  constructor(public dialog: MatDialog, private api: ApiService) { }

  @Input('state')
  set state(state: string) {
    console.debug('client-a received state', state);
  }



  ngOnInit() {
  }

  login() {

    this.api.login(); //call login from api
  }
  register() {
    //TODO: go register page using router and Do some api call when registering
  }

}
