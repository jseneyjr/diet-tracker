import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {FoodService} from './services/food.service';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FoodService
  ],
  entryComponents: [ ]
})
export class FoodShareModule { }
