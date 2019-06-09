import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipePageComponent} from './home/components/recipe-page/recipe-page.component';
import {RecipeRoutingModule} from './recipe-routing.module';

@NgModule({
  declarations: [
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  providers: [ ],
  entryComponents: [ ]
})
export class RecipeModule { }
