import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/api/api.service';
import { SessionStorage, WebstorableArray, LocalStorage } from 'ngx-store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
@Component({
  selector: 'app-password-verify',
  templateUrl: './password-verify.component.html',
  styleUrls: ['./password-verify.component.css']
})
export class PasswordVerifyComponent implements OnInit {

  @Input() label;
  @Input() token;
  @Input() appname;
  @Input() redirecturl;
  @Input() user;
  @Output() valueChange  = new EventEmitter<any>();
 loading = false;
 checked = false;
 response = {};
 error_msg = '';
 error_errors = [];
  private clicksCt = 0;
  form;
  @SessionStorage() u_page: WebstorableArray<any> = <any>[];
  // tslint:disable-next-line:no-inferrable-types
  // tslint:disable-next-line:max-line-length
  constructor(  private route: ActivatedRoute, private fb: FormBuilder, public dialog: MatDialog, private api: ApiService, private router: Router, private auth: AuthService ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });
   }

  ngOnInit() {
    this.auth.redirect_url = this.route.snapshot.queryParams['redirect'] || '/box';
  }

  handle() {
    this.clicksCt++;
    this.valueChange.emit(this.clicksCt);
  }
resetPassword() {
  this.response = {user: this.user, next_step: false, rest_password: true };
                this.valueChange.emit(this.response);
}
  PasswordVerify() {
    this.error_msg = '';
    this.loading = true;
    this.response = [];
    const data = {email: this.user.email, password: this.form.value.password, remember: this.checked};
    this.api.passwordVerifying(data, this.user.auth_token).subscribe(res => {
      this.loading = false;
      if (res) {
      const user_ = {id: 2, e_unique: this.api.encrypt(res['email']).toString(), u_avatar: this.api.encrypt(res['avatar_url']).toString() };
      this.u_page.push(user_);
        this.valueChange.emit(this.response);
       if (this.auth.sendToken(this.user.auth_token)) {
        this.router.navigate([this.auth.redirect_url]);
       }
      }
    }, _error => {
      this.loading = false;
      if (_error.ok === false) {
        this.error_msg = _error.error['*'] ? _error.error['*'] : _error.error.message;
        this.error_errors.push({email: _error.error.errors['email'] !== undefined ? _error.error.errors['email'][0] : '',
        password: _error.error.errors['password'] !== undefined ? _error.error.errors['password'][0] : ''});
        return;
      }
    }
    );
  }
}

