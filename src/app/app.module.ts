import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { PaymentComponent } from './payment/payment.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[PaymentComponent],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(PaymentComponent, { injector: this.injector });
    
    customElements.define('rw-pay', el);
   }
}
