import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
