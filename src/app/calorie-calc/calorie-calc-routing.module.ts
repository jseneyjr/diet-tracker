import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CalorieCalcPageComponent} from './home/components/calorie-calc-page/calorie-calc-page.component';


const routes: Routes = [
  {
    path: '',
    component: CalorieCalcPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalorieCalcRoutingModule { }
