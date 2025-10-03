import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningsRoutingModule } from './earnings-routing-module';
import { EarningsOverview } from './earnings-overview/earnings-overview';
import { TransactionHistory } from './transaction-history/transaction-history';
import { PayoutSettings } from './payout-settings/payout-settings';


@NgModule({
  declarations: [
    EarningsOverview,
    TransactionHistory,
    PayoutSettings
  ],
  imports: [
    CommonModule,
    EarningsRoutingModule
  ]
})
export class EarningsModule { }
