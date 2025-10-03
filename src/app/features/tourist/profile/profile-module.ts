import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing-module';
import { ProfileView } from './profile-view/profile-view';
import { ProfileEdit } from './profile-edit/profile-edit';
import { SavedExperiences } from './saved-experiences/saved-experiences';


@NgModule({
  declarations: [
    ProfileView,
    ProfileEdit,
    SavedExperiences
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
