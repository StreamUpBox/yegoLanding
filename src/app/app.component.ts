import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as $ from 'jquery';

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

  constructor(public dialog: MatDialog) { }
}
