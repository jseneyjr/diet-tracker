import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FoodService } from './services/food.service';
import {FoodModule} from './food/food.module';
import {FoodResolver} from './food/resolvers/food.resolve';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FoodModule
  ],
  providers: [
    FoodService,
    FoodResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
