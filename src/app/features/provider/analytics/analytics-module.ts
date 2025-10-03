import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing-module';
import { ViewsAnalytics } from './views-analytics/views-analytics';
import { BookingAnalytics } from './booking-analytics/booking-analytics';


@NgModule({
  declarations: [
    ViewsAnalytics,
    BookingAnalytics
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
