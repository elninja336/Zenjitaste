import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing-module';
import { BookingForm } from './booking-form/booking-form';
import { BookingSummary } from './booking-summary/booking-summary';
import { BookingConfirmation } from './booking-confirmation/booking-confirmation';
import { PaymentSelection } from './payment/payment-selection/payment-selection';
import { CardPayment } from './payment/card-payment/card-payment';
import { MpesaPayment } from './payment/mpesa-payment/mpesa-payment';
import { PaypalPayment } from './payment/paypal-payment/paypal-payment';


@NgModule({
  declarations: [
    BookingForm,
    BookingSummary,
    BookingConfirmation,
    PaymentSelection,
    CardPayment,
    MpesaPayment,
    PaypalPayment
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
