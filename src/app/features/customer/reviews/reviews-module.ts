import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing-module';
import { ReviewForm } from './review-form/review-form';
import { ReviewList } from './review-list/review-list';
import { ReviewCard } from './review-card/review-card';


@NgModule({
  declarations: [
    ReviewForm,
    ReviewList,
    ReviewCard
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
