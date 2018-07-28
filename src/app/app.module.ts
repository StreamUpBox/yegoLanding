import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';
import { createCustomElement } from '@angular/elements';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    PaymentComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  entryComponents:[PaymentComponent,CheckoutComponent],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {
   
  }
  ngDoBootstrap() {
    const el = createCustomElement(PaymentComponent, { injector: this.injector });
    customElements.define('rw-pay', el);
   }
}
