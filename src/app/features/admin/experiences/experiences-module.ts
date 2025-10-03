import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing-module';
import { PendingApproval } from './pending-approval/pending-approval';
import { ApprovedList } from './approved-list/approved-list';
import { RejectedList } from './rejected-list/rejected-list';


@NgModule({
  declarations: [
    PendingApproval,
    ApprovedList,
    RejectedList
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
