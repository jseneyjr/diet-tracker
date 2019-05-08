import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FoodListComponent } from './list/food-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AgGridModule.withComponents(null),
    HttpClientModule
  ],
  providers: []
})
export class FoodModule { }
