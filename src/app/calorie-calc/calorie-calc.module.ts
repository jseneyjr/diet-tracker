import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalorieCalcPageComponent} from './home/components/calorie-calc-page/calorie-calc-page.component';
import {CalorieCalcRoutingModule} from './calorie-calc-routing.module';

@NgModule({
  declarations: [
    CalorieCalcPageComponent
  ],
  imports: [
    CommonModule,
    CalorieCalcRoutingModule
  ],
  providers: [ ],
  entryComponents: [ ]
})
export class CalorieCalcModule { }
