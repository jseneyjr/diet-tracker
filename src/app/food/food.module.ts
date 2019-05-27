import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FoodPageComponent} from './home/components/food-page/food-page.component';
import {FoodPageResolver} from './home/resolvers/food-page.resolver';
import {FoodListComponent} from './list/components/food-list/food-list.component';
import {FoodListAddComponent} from './list/components/food-list-add/food-list-add.component';
import {FoodService} from './services/food.service';
import {CommonModule} from '@angular/common';
import {MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    FoodPageComponent,
    FoodListComponent,
    FoodListAddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [
    FoodPageResolver,
    FoodService
  ],
  entryComponents: [
    FoodListAddComponent
  ]
})
export class FoodModule { }
