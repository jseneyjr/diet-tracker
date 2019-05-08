import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodListComponent} from './food/list/food-list.component';
import {FoodResolve} from './food/resolvers/food.resolve';

const routes: Routes = [
  {
    path: 'foodlist',
    component: FoodListComponent,
    resolve: {
      food: FoodResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
