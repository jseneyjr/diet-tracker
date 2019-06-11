import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {FoodShareModule} from '../food-share.module';

import {FoodListComponent} from './components/food-list/food-list.component';
import {FoodListDialogComponent} from './components/food-list-dialog/food-list-dialog.component';

import {MatTableModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FoodListComponent,
    FoodListDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FoodShareModule
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
