import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FoodListComponent } from './list/food-list.component';
import { FoodAddComponent } from './add/food-add.component';
import {CommonModule} from '@angular/common';
import {MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    FoodAddComponent
  ]
})
export class FoodModule { }
