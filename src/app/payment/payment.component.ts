import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PaymentComponent implements OnInit {

  @Input() label = 'Do not care';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

 
  openCheckOut(){
    
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '250px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   
    });
  }

}
