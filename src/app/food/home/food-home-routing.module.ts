import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FoodPageComponent} from './components/food-page/food-page.component';
import {FoodPageResolver} from './resolvers/food-page.resolver';


const routes: Routes = [
  {
    path: '',
    component: FoodPageComponent,
    resolve: {
      foodlist: FoodPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [FoodPageResolver],
  exports: [RouterModule]
})
export class FoodHomeRoutingModule { }
