import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing-module';
import { GeneralSettings } from './general-settings/general-settings';
import { PaymentSettings } from './payment-settings/payment-settings';
import { LanguageSettings } from './language-settings/language-settings';
import { EmailTemplates } from './email-templates/email-templates';


@NgModule({
  declarations: [
    GeneralSettings,
    PaymentSettings,
    LanguageSettings,
    EmailTemplates
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
