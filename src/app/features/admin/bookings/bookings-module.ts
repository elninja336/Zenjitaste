import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing-module';
import { BookingOverview } from './booking-overview/booking-overview';
import { DisputedBookings } from './disputed-bookings/disputed-bookings';


@NgModule({
  declarations: [
    BookingOverview,
    DisputedBookings
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
