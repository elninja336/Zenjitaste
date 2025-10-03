import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing-module';
import { MessageList } from './message-list/message-list';
import { MessageThread } from './message-thread/message-thread';


@NgModule({
  declarations: [
    MessageList,
    MessageThread
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
