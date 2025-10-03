import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { ProviderLogin } from './provider-login/provider-login';
import { ProviderRegister } from './provider-register/provider-register';


@NgModule({
  declarations: [
    ProviderLogin,
    ProviderRegister
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
