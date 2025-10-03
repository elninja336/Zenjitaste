import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing-module';
import { MenuList } from './menu-list/menu-list';
import { DishCreate } from './dish-create/dish-create';
import { DishEdit } from './dish-edit/dish-edit';


@NgModule({
  declarations: [
    MenuList,
    DishCreate,
    DishEdit
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
