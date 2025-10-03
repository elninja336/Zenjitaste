import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing-module';
import { TouristList } from './tourist-list/tourist-list';
import { ProviderList } from './provider-list/provider-list';
import { UserDetail } from './user-detail/user-detail';
import { UserVerification } from './user-verification/user-verification';


@NgModule({
  declarations: [
    TouristList,
    ProviderList,
    UserDetail,
    UserVerification
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
