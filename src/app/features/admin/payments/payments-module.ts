import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing-module';
import { TransactionList } from './transaction-list/transaction-list';
import { PayoutManagement } from './payout-management/payout-management';
import { RefundManagement } from './refund-management/refund-management';


@NgModule({
  declarations: [
    TransactionList,
    PayoutManagement,
    RefundManagement
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
