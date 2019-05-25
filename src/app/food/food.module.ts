import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FoodListComponent } from './list/food-list.component';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: []
})
export class FoodModule { }
