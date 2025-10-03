import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing-module';
import { BookingList } from './booking-list/booking-list';
import { BookingDetail } from './booking-detail/booking-detail';
import { BookingCalendar } from './booking-calendar/booking-calendar';
import { ConfirmBooking } from './confirm-booking/confirm-booking';
import { CancelBooking } from './cancel-booking/cancel-booking';


@NgModule({
  declarations: [
    BookingList,
    BookingDetail,
    BookingCalendar,
    ConfirmBooking,
    CancelBooking
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
