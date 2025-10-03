import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityRoutingModule } from './availability-routing-module';
import { CalendarView } from './calendar-view/calendar-view';
import { TimeSlots } from './time-slots/time-slots';


@NgModule({
  declarations: [
    CalendarView,
    TimeSlots
  ],
  imports: [
    CommonModule,
    AvailabilityRoutingModule
  ]
})
export class AvailabilityModule { }
