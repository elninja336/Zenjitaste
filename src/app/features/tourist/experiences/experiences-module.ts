import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing-module';
import { ExperienceList } from './experience-list/experience-list';
import { ExperienceDetail } from './experience-detail/experience-detail';
import { ExperienceFilter } from './experience-filter/experience-filter';
import { ExperienceCard } from './experience-card/experience-card';


@NgModule({
  declarations: [
    ExperienceList,
    ExperienceDetail,
    ExperienceFilter,
    ExperienceCard
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
