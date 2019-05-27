import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodPageComponent} from './food/home/components/food-page/food-page.component';
import {FoodPageResolver} from './food/home/resolvers/food-page.resolver';

const routes: Routes = [
  {
    path: 'foods',
    component: FoodPageComponent,
    resolve: {
      foodlist: FoodPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
