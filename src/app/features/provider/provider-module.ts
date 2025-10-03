import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing-module';
import { ProviderLayout } from './provider-layout/provider-layout';
import { ProviderHeader } from './provider-layout/components/provider-header/provider-header';
import { ProviderSidebar } from './provider-layout/components/provider-sidebar/provider-sidebar';
import { ProviderBreadcrumb } from './provider-layout/components/provider-breadcrumb/provider-breadcrumb';
import { Dashboard } from './dashboard/dashboard';
import { StatsOverview } from './dashboard/components/stats-overview/stats-overview';
import { RecentBookings } from './dashboard/components/recent-bookings/recent-bookings';
import { RevenueChart } from './dashboard/components/revenue-chart/revenue-chart';
import { RatingSummary } from './dashboard/components/rating-summary/rating-summary';


@NgModule({
  declarations: [
    ProviderLayout,
    ProviderHeader,
    ProviderSidebar,
    ProviderBreadcrumb,
    Dashboard,
    StatsOverview,
    RecentBookings,
    RevenueChart,
    RatingSummary
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
