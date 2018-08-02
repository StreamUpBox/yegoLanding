import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../api/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  // encapsulation: ViewEncapsulation.Native,
  providers: [ApiService]
})
export class WelComeComponent implements OnInit {

  constructor(public dialog: MatDialog, private api: ApiService) { }

  // tslint:disable-next-line:max-line-length
  @Input('state') // TODO: keep this here I am still experimenting the the input stuff on angular elements but for our case you do not need it anyway!
  set state(state: string) {
    // tslint:disable-next-line:no-console
    console.debug('client-a received state', state);
  }
  ngOnInit() {
    const mainNavigation = $('.navbar-top');
    const stickyDiv = 'stickynavbar';
    const yourHeader = $('.navbar-default').height();

    $(window).scroll(function() {
        if ( $(this).scrollTop() > yourHeader ) {
            mainNavigation.addClass(stickyDiv);
        } else {
            mainNavigation.removeClass(stickyDiv);
        }
    });
  }

}
