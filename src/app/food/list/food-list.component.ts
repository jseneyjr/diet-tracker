import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../shared/models/food';


@Component({
  selector: 'app-food-list',
  templateUrl: 'food-list.component.html',
  styleUrls: ['food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodlist: Food[];
  columnDefs: string[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.foodlist = data.foodlist;
    this.columnDefs = ['name', 'unit', 'amount', 'calories', 'fat', 'protein', 'carbs', 'fiber', 'netCarb'];
  }

  getTotalCalories() {
    return this.foodlist.reduce((acc, food) => acc + food.calories, 0);
  }
  getTotalFat() {
    return this.foodlist.reduce((acc, food) => acc + food.fat, 0);
  }
  getTotalProtein() {
    return this.foodlist.reduce((acc, food) => acc + food.protein, 0);
  }
  getTotalCarbs() {
    return this.foodlist.reduce((acc, food) => acc + food.carbs, 0);
  }
  getTotalFiber() {
    return this.foodlist.reduce((acc, food) => acc + food.fiber, 0);
  }
  getTotalNetCarb() {
    return this.foodlist.reduce((acc, food) => acc + food.netCarb, 0);
  }
}
