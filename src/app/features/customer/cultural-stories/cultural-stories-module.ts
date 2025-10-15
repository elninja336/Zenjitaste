import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturalStoriesRoutingModule } from './cultural-stories-routing-module';
import { StoryList } from './story-list/story-list';
import { StoryDetail } from './story-detail/story-detail';


@NgModule({
  declarations: [
    StoryList,
    StoryDetail
  ],
  imports: [
    CommonModule,
    CulturalStoriesRoutingModule
  ]
})
export class CulturalStoriesModule { }
