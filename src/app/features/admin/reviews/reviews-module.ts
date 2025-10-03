import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing-module';
import { FlaggedReviews } from './flagged-reviews/flagged-reviews';
import { ReviewModeration } from './review-moderation/review-moderation';


@NgModule({
  declarations: [
    FlaggedReviews,
    ReviewModeration
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
