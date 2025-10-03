import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { AdminLayout } from './admin-layout/admin-layout';
import { Users } from './users/users';
import { Products } from './products/products';
import { Settings } from './settings/settings';
import { AdminHeader } from './admin-layout/components/admin-header/admin-header';
import { AdminSidebar } from './admin-layout/components/admin-sidebar/admin-sidebar';
import { AdminBreadcrumb } from './admin-layout/components/admin-breadcrumb/admin-breadcrumb';
import { PlatformStats } from './dashboard/components/platform-stats/platform-stats';
import { RevenueOverview } from './dashboard/components/revenue-overview/revenue-overview';
import { UserGrowth } from './dashboard/components/user-growth/user-growth';
import { TopExperiences } from './dashboard/components/top-experiences/top-experiences';


@NgModule({
  declarations: [
    Dashboard,
    AdminLayout,
    Users,
    Products,
    Settings,
    AdminHeader,
    AdminSidebar,
    AdminBreadcrumb,
    PlatformStats,
    RevenueOverview,
    UserGrowth,
    TopExperiences
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
