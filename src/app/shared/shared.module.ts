import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FoodTableComponent} from './components/food-table/food-table.component';
import {FoodTableDialogComponent} from './components/food-table-dialog/food-table-dialog.component';
import {MaterialModule} from './modules/material-ui/material-ui.module';


@NgModule({
  declarations: [
    FoodTableComponent,
    FoodTableDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FoodTableComponent,
    MaterialModule
  ],
  providers: [ ],
  entryComponents: [
    FoodTableDialogComponent
  ]
})
export class SharedModule { }
