import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing-module';
import { RevenueReports } from './revenue-reports/revenue-reports';
import { BookingReports } from './booking-reports/booking-reports';
import { UserReports } from './user-reports/user-reports';


@NgModule({
  declarations: [
    RevenueReports,
    BookingReports,
    UserReports
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
