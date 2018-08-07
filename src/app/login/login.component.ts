import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'yegobox-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent  implements OnInit {
  constructor() { }
  @Input() label = 'login';
  @Input() token = '';
  @Input() appname = 'Yegobox';
  @Input() redirecturl = '/home';
  @Output() action = new EventEmitter<any>();
  user = {};
  next_step = false;
  checkChanges($event)  {
    if (!$event.next_step) {
      this.action.emit($event);
    } else {
      this.user = $event.user;
      this.next_step = $event.next_step;
    }
  }

  ngOnInit() {
  }
}

