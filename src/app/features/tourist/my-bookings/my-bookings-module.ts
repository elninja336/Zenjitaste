import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBookingsRoutingModule } from './my-bookings-routing-module';
import { BookingList } from './booking-list/booking-list';
import { BookingDetails } from './booking-details/booking-details';
import { CancelBooking } from './cancel-booking/cancel-booking';


@NgModule({
  declarations: [
    BookingList,
    BookingDetails,
    CancelBooking
  ],
  imports: [
    CommonModule,
    MyBookingsRoutingModule
  ]
})
export class MyBookingsModule { }
