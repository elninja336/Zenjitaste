import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing-module';
import { ExperienceList } from './experience-list/experience-list';
import { ExperienceCreate } from './experience-create/experience-create';
import { ExperienceEdit } from './experience-edit/experience-edit';
import { ExperiencePreview } from './experience-preview/experience-preview';


@NgModule({
  declarations: [
    ExperienceList,
    ExperienceCreate,
    ExperienceEdit,
    ExperiencePreview
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
