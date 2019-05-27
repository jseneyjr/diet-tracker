import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../../../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: 'food-page.component.html',
  styleUrls: ['food-page.component.css'],
})

export class FoodPageComponent implements OnInit {
  foodlist: Food[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    const list: Food[] = data.foodlist;
    this.foodlist = list.map(food =>
      new Food(food.name, food.amount, food.unit, food.calories, food.fat, food.protein, food.carbs, food.fiber));
  }
}
