import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {FoodPageComponent} from './components/food-page/food-page.component';
import {FoodHomeRoutingModule} from './food-home-routing.module';
import {FoodShareModule} from '../food-share.module';

@NgModule({
  declarations: [
    FoodPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FoodHomeRoutingModule,
    FoodShareModule
  ],
  providers: [ ],
  entryComponents: [ ]
})
export class FoodHomeModule { }
