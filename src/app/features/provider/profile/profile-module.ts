import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing-module';
import { BusinessInfo } from './business-info/business-info';
import { Verification } from './verification/verification';
import { CulturalStory } from './cultural-story/cultural-story';
import { Photos } from './photos/photos';


@NgModule({
  declarations: [
    BusinessInfo,
    Verification,
    CulturalStory,
    Photos
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
