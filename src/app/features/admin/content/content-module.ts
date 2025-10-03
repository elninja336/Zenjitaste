import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing-module';
import { CulturalStories } from './cultural-stories/cultural-stories';
import { BlogPosts } from './blog-posts/blog-posts';
import { Faqs } from './faqs/faqs';


@NgModule({
  declarations: [
    CulturalStories,
    BlogPosts,
    Faqs
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
