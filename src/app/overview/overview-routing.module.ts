import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OverviewPageComponent} from './home/components/overview-page/overview-page.component';
import {OverviewPageResolver} from './resolvers/overview-page.resolver';


const routes: Routes = [
  {
    path: '',
    component: OverviewPageComponent,
    resolve: {
      mealplan: OverviewPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [OverviewPageResolver],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
