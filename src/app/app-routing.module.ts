import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404PageComponent} from './ui/404/error-404-page-component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './overview/overview.module#OverviewModule'
  },
  {
    path: 'foods',
    loadChildren: './food/home/food-home.module#FoodHomeModule'
  },
  {
    path: 'recipes',
    loadChildren: './recipe/recipe.module#RecipeModule'
  },
  {
    path: 'caloriecalc',
    loadChildren: './calorie-calc/calorie-calc.module#CalorieCalcModule'
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  // There's a bug that's preventing wild card routes to be lazy loaded (see: https://github.com/angular/angular/issues/13848)
  // That's why the Error page should be eagerly loaded
  {
    path: '**',
    component: Error404PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
