import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule, AgGridColumn } from 'ag-grid-angular';

import { FoodService } from './services/food.service';
import {FoodModule} from './food/food.module';
import {FoodResolve} from './food/resolvers/food.resolve';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(null),
    HttpClientModule,
    FoodModule
  ],
  providers: [
    FoodService,
    FoodResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
