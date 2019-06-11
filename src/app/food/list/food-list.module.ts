import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {FoodShareModule} from '../food-share.module';

import {FoodListComponent} from './components/food-list/food-list.component';
import {FoodListDialogComponent} from './components/food-list-dialog/food-list-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/modules/material-ui/material-ui.module';

@NgModule({
  declarations: [
    FoodListComponent,
    FoodListDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FoodShareModule,
    MaterialModule
  ],
  exports: [
    FoodListComponent
  ],
  providers: [ ],
  entryComponents: [
    FoodListDialogComponent
  ]
})
export class FoodListModule { }
