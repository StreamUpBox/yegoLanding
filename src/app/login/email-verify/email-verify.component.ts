import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';
@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  @Input() label;
  @Input() token;
  @Input() appname;
  @Input() redirecturl;

  @Output() valueChange  = new EventEmitter<any>();
 loading = false;
 response = {};
  private clicksCt = 0;
   constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit() {
  }

  handle() {
    this.clicksCt++;
    this.valueChange.emit(this.clicksCt);
  }

  emailVerify() {
    this.loading = true;
    this.response = [];
   if (!this.emailFormControl.valid) {
     alert('Invalid email!');
    return;
   }
    const data = {email: this.emailFormControl.value};
    this.api.emailVerifying(data).subscribe(res => {
      this.loading = false;
      if (res['response']) {
        if (res['data'] && res['status'] === 200) {
          this.response = {
          status: res['status'],
          message: res['message'],
          user: res['data']['user'],
          next_step: true
          };
          this.valueChange.emit(this.response);
        }
      } else {
        this.response = {
          status: res['status'],
          message: res['message'],
          erros: res['errors'],
          next_step: false
          };
        this.valueChange.emit(this.response);
      }
    }, _error => {
      this.loading = false;
      console.log(_error);
    }
    );
  }
}
