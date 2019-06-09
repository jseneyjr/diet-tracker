import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodPageComponent} from './components/food-page/food-page.component';
import {FoodHomeRoutingModule} from './food-home-routing.module';
import {FoodShareModule} from '../food-share.module';
import {FoodListModule} from '../list/food-list.module';

@NgModule({
  declarations: [
    FoodPageComponent
  ],
  imports: [
    CommonModule,
    FoodHomeRoutingModule,
    FoodShareModule,
    FoodListModule
  ],
  providers: [ ],
  entryComponents: [ ]
})
export class FoodHomeModule { }
