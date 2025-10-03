import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing-module';
import { ReviewList } from './review-list/review-list';
import { ReviewResponse } from './review-response/review-response';


@NgModule({
  declarations: [
    ReviewList,
    ReviewResponse
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
