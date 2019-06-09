import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {FoodShareModule} from '../food-share.module';

import {FoodListComponent} from './components/food-list/food-list.component';
import {FoodListAddComponent} from './components/food-list-add/food-list-add.component';

import {MatTableModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    FoodListComponent,
    FoodListAddComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    FoodShareModule
  ],
  exports: [
    FoodListComponent
  ],
  providers: [ ],
  entryComponents: [
    FoodListAddComponent
  ]
})
export class FoodListModule { }
